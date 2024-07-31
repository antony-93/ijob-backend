import { Router } from "express";
import ApiRouter from "../../../core/shared/middlewares/RouterApiFunctions";
import ServicoRoute from "./ServicoRoute";

const route = ApiRouter();

export default function MainServicoRoute(app: Router) { 
    app.use('/servico', route);
    
    ServicoRoute(route);
}