import { RequestHandler } from "express-serve-static-core";

declare module "express-serve-static-core" {
    interface Router {
        authGet(path: string, ...handlers: RequestHandler[]): this;
        authPost(path: string, ...handlers: RequestHandler[]): this;
    }
}
