import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ApiRouter from '../../../core/shared/middlewares/RouterApiFunctions';
import { validateDTO } from '../../../core/shared/middlewares/ValidateDTO';
import { applyAuthenticationMethod } from '../../../core/shared/Decorators/AuthenticationMethod';
import { PrestadorRepository } from '../repositorys/PrestadorRepository';
import { PrestadorService } from '../services/PrestadorService';
import { PrestadorController } from '../controllers/PrestadorController';
import { CreatePrestadorEmpresaDto } from '../dtos/create-prestador-empresa.dto';

const route = ApiRouter();
applyAuthenticationMethod(route, 'prestador');

export default async (app: Router) => {
    const _prestadorRepository = await getCustomRepository(PrestadorRepository)
    const _prestadorService = new PrestadorService(_prestadorRepository);
    const _prestadorController = new PrestadorController(_prestadorService);

    app.use(route)

    route.authGet('/', _prestadorController.listar);
    route.post('/', validateDTO(CreatePrestadorEmpresaDto), _prestadorController.criar);
};