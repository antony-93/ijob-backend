import { Router } from "express";
import UserAuthenticateRoute from "./UserAuthenticateRoute";
import UserRoute from "./UserRoute";
import ApiRouter from "../../../core/shared/middlewares/RouterApiFunctions";

const route = ApiRouter();

export default function MainUserRoute(app: Router) {
    app.use('/usuarios', route);

    UserRoute(route)
    UserAuthenticateRoute(route)
};
