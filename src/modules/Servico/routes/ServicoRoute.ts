import { Router } from "express";
import ApiRouter from "../../../core/shared/middlewares/RouterApiFunctions";
import { getCustomRepository } from "typeorm";
import { ServicoService } from "../service/ServicoService";
import { ServicoController } from "../controller/ServicoController";
import { ServicoRepository } from "../repository/ServicoRepository";
import { applyAuthenticationMethod } from "../../../core/shared/Decorators/AuthenticationMethod";

const route = ApiRouter();
applyAuthenticationMethod(route, 'prestador');

export default function ServicoRoute(app: Router) {
    const _servicoRepository = getCustomRepository(ServicoRepository),
        _servicoService = new ServicoService(_servicoRepository),
        _servicoController = new ServicoController(_servicoService);
    
    app.use(route);

    route.authGet('/', _servicoController.listar);
    route.authGet('/:id', _servicoController.buscarPorId);

    route.authPost('/', _servicoController.criar);
}