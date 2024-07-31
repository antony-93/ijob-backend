import { Response, Request } from "express";
import { PrestadorService } from "../services/PrestadorService";
import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { Usuario } from "../../Usuario/entities/Usuario";
import { Prestador } from "../entities/Prestador";

export class PrestadorController {

    constructor(private readonly _prestadorService: PrestadorService) { }

    listar = async (req: Request, res: Response) => {
        try {
            const prestadores: Prestador[] = await this._prestadorService.listar(req.params);
            res.success(prestadores)
        } catch (error) {
            res.serverError({ message: 'Internal server error', error: error?.message })
        }
    }

    criar = async (req: Request, res: Response) => {
        try {
            const prestador: Prestador = await this._prestadorService.salvar(req.body);
            res.success({ message: 'Prestador criado com sucesso', content: prestador })
        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                res.badRequest(error)
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error })
            }
        }
    }
}