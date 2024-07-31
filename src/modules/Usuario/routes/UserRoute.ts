import { Router } from 'express';
import { UsuarioService } from '../services/UsuarioService';
import { UsuarioController } from '../controllers/UsuarioController';
import { getCustomRepository } from 'typeorm';
import { UsuarioRepository } from '../repositorys/UsuarioRepository';
import ApiRouter from '../../../core/shared/middlewares/RouterApiFunctions';
import { validateDTO } from '../../../core/shared/middlewares/ValidateDTO';
import { CreateUsuarioDto } from '../dtos/create-usuario.dto';
import { applyAuthenticationMethod } from '../../../core/shared/Decorators/AuthenticationMethod';

const route = ApiRouter();
applyAuthenticationMethod(route, 'usuario');

export default async (app: Router) => {
    const _usuarioRepository = await getCustomRepository(UsuarioRepository)
    const _usuarioService = new UsuarioService(_usuarioRepository);
    const _usuarioController = new UsuarioController(_usuarioService);

    app.use(route)

    route.authGet('/', _usuarioController.getUsuarios);
    route.post('/', validateDTO(CreateUsuarioDto), _usuarioController.createUsuario);
};