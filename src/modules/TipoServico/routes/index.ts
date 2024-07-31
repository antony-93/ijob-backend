import { Router } from "express";
import ApiRouter from "../../../core/shared/middlewares/RouterApiFunctions";
import TipoServicoRoute from "./TipoServicoRoute";

const route = ApiRouter();

export default function MainTipoServicoRouter(app: Router) {
    app.use('/tiposervico', route);

    TipoServicoRoute(route)
};
