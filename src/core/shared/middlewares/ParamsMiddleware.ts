import { Params } from "../utils/Params";

export function ParamsMiddleware(req: any, res: any, next: any) {
    req.defaultParams = new Params(
        req.query.fields || [],
        req.query.filters || [],
        req.query.sorts || []
    );
    next();
}