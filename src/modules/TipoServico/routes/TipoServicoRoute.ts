import { Router } from "express";
import { applyAuthenticationMethod } from "../../../core/shared/Decorators/AuthenticationMethod";
import ApiRouter from "../../../core/shared/middlewares/RouterApiFunctions";
import { getCustomRepository } from "typeorm";
import { TipoServicoRepository } from "../repository/TipoServicoRepository";
import { TipoServicoService } from "../services/TipoServicoService";
import { TipoServicoController } from "../controller/TipoServicoController";


const route = ApiRouter();
applyAuthenticationMethod(route, 'prestador');

export default async (app: Router) => {
    const _tipoServicoRepository = await getCustomRepository(TipoServicoRepository)
    const _tipoServicoService = new TipoServicoService(_tipoServicoRepository);
    const _tipoServicoController = new TipoServicoController(_tipoServicoService);

    app.use(route)

    route.authGet('/', _tipoServicoController.listar);
};