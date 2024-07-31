import { Router } from "express";
import PrestadorAuthenticateRoute from "./PrestadorAuthenticateRoute";
import PrestadorRoute from "./PrestadorRoute";
import ApiRouter from "../../../core/shared/middlewares/RouterApiFunctions";

const route = ApiRouter();

export default function MainPrestadorRoute(app: Router) {
    app.use('/prestadores', route);

    PrestadorRoute(route)
    PrestadorAuthenticateRoute(route)
};
