import { Request, Response } from "express";
import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { Servico } from "../entities/Servico";
import { ServicoService } from "../service/ServicoService";
import { Params } from "../../../core/shared/utils/Params";

export class ServicoController { 

    constructor(private readonly _servicoService: ServicoService) {}

    listar = async (req: Request, res: Response): Promise<Servico[]> => {
        try {
            return await this._servicoService.listar(req.params);
        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                res.badRequest(error)
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error })
            }
        }
    }

    buscarPorId = async (req: Request, res: Response): Promise<Servico> => {
        try {
            return await this._servicoService.buscarUm(req.params);
        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                res.badRequest(error)
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error })
            }
        }
    }

    criar = async (req: Request, res: Response): Promise<Servico> => {
        try {
            return await this._servicoService.salvar(req.body);
        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                res.badRequest(error)
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error })
            }
        }
    }
}