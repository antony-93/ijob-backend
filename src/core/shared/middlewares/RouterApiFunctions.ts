import { RequestHandler, Router } from "express";
import { autenticacaoPrestador, autenticacaoUsuario } from "./Auth";
import { ParamsMiddleware } from "./ParamsMiddleware";

const ApiRouter = (): Router & { authGet?: (path: string, ...handlers: RequestHandler[]) => Router, authenticationMethod?: string } =>  {
    const router: Router & { authGet?: (path: string, ...handlers: RequestHandler[]) => Router, authenticationMethod?: string } = Router();

    router.authGet = (path: string, ...handlers: RequestHandler[]): Router => {
        if (router.authenticationMethod === 'prestador') {
            router.get(path, autenticacaoPrestador, ParamsMiddleware, ...handlers);
        }
        
        if (router.authenticationMethod === 'usuario') {
            router.get(path, autenticacaoUsuario, ParamsMiddleware, ...handlers);
        }
        
        return router;
    };
    
    router.authPost = (path: string, ...handlers: RequestHandler[]): Router => {
        if (router.authenticationMethod === 'prestador') {
            router.post(path, autenticacaoPrestador, ...handlers);
        }
        
        if (router.authenticationMethod === 'usuario') {
            router.post(path, autenticacaoUsuario, ...handlers);
        }
        
        return router;
    };

    return router;
}

export default ApiRouter;