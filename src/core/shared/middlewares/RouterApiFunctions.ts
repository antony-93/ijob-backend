import { RequestHandler, Router } from "express";
import auth from "./Auth";

const ApiRouter = (): Router => {
    const router: Router = Router();

    router.authGet = (path: string, ...handlers: RequestHandler[]): Router => {
        router.get(path, auth, ...handlers);
        return router;  // Retorna o router para manter a cadeia de chamadas
    };

    return router;
}

export default ApiRouter;