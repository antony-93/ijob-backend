import { Request, Response } from "express";
import { ValidationError } from "class-validator";
import { AuthenticateService } from "../services/AuthenticateService";

export class AuthenticateController {

    constructor(private readonly _authenticateService: AuthenticateService) { }

    autenticarUsuario = async (req: Request, res: Response) => {
        try {
            const auth = await this._authenticateService.autenticarUsuario(req.body);
            res.success(auth);
        } catch (error) {
            if (error instanceof ValidationError) {
                res.badRequest(error);
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error });
            }
        }
    }

    autenticarPrestador = async (req: Request, res: Response) => {
        try {
            const auth = await this._authenticateService.autenticarPrestador(req.body);
            res.success(auth);
        } catch (error) {
            if (error instanceof ValidationError) {
                res.badRequest(error);
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error });
            }
        }
    }
}