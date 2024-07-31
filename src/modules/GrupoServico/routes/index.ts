import { Router } from "express";
import ApiRouter from "../../../core/shared/middlewares/RouterApiFunctions";
import GrupoServicoRoute from "./GroupoServicoRoute";

const route = ApiRouter();

export default function MainGrupoServicoRoute(app: Router) {
    app.use('/gruposervico', route);

    GrupoServicoRoute(route);
};
