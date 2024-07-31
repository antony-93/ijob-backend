import { Router } from "express";
import ApiRouter from "../../../core/shared/middlewares/RouterApiFunctions";
import { applyAuthenticationMethod } from "../../../core/shared/Decorators/AuthenticationMethod";
import { GrupoServicoRepository } from "../repository/GrupoServicoRepository";
import { GrupoServicoService } from "../service/GrupoServico";
import { GrupoServicoController } from "../controllers/GrupoServicoController";
import { getCustomRepository } from "typeorm";
import { validateDTO } from "../../../core/shared/middlewares/ValidateDTO";
import { CreateGrupoServicoDto } from "../dtos/create-gruposervico.dto";

const route = ApiRouter();
applyAuthenticationMethod(route, 'prestador');

export default function GrupoServicoRoute(app: Router) {
    const _grupoServicoRepository = getCustomRepository(GrupoServicoRepository),
        _grupoServicoService = new GrupoServicoService(_grupoServicoRepository),
        _grupoServicoController = new GrupoServicoController(_grupoServicoService);

    app.use(route);

    route.authGet('/', _grupoServicoController.listar);
    route.authPost('/', validateDTO(CreateGrupoServicoDto), _grupoServicoController.criar);
}