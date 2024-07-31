import { Router } from 'express';
import ApiRouter from '../../../core/shared/middlewares/RouterApiFunctions';
import { validateDTO } from '../../../core/shared/middlewares/ValidateDTO';
import { AuthenticateDto } from '../../Authenticate/dtos/Authenticate.dto';
import { getCustomRepository } from 'typeorm';
import { AuthenticateService } from '../../Authenticate/services/AuthenticateService';
import { AuthenticateController } from '../../Authenticate/controllers/AuthenticateController';
import { PrestadorService } from '../services/PrestadorService';
import { PrestadorRepository } from '../repositorys/PrestadorRepository';

const route = ApiRouter();

export default (app: Router) => {
  const _prestadorService = new PrestadorService(getCustomRepository(PrestadorRepository)),
    _authService = new AuthenticateService(null, _prestadorService),
    _authController = new AuthenticateController(_authService);

  app.use('/authenticate', route);

  route.post('/', validateDTO(AuthenticateDto), _authController.autenticarPrestador);
};