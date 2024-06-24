import { Router } from 'express';
import ApiRouter from '../../../core/shared/middlewares/RouterApiFunctions';
import { validateDTO } from '../../../core/shared/middlewares/ValidateDTO';
import { AuthenticateDto } from '../../Authenticate/dtos/Authenticate.dto';
import { UsuarioService } from '../services/UsuarioService';
import { getCustomRepository } from 'typeorm';
import { UsuarioRepository } from '../repositorys/UsuarioRepository';
import { AuthenticateService } from '../../Authenticate/services/AuthenticateService';
import { AuthenticateController } from '../../Authenticate/controllers/AuthenticateController';

const route = ApiRouter();

export default (app: Router) => {
  const _usuarioService = new UsuarioService(getCustomRepository(UsuarioRepository)),
    _authService = new AuthenticateService(_usuarioService),
    _authController = new AuthenticateController(_authService);

  app.use('/authenticate', route);

  route.post('/', validateDTO(AuthenticateDto), _authController.usuarioAuthenticate);
};