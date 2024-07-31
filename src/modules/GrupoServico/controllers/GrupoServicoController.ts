import { Request, Response } from "express";
import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { GrupoServico } from "../entities/GrupoServico";
import { GrupoServicoService } from "../service/GrupoServico";
import { Params } from "../../../core/shared/utils/Params";
import { Filter } from "../../../core/shared/utils/Filters";

export class GrupoServicoController {
    constructor(private readonly _grupoServicoService: GrupoServicoService) { }

    listar = async (req: Request, res: Response) => {
        try {
            req.defaultParams = new Params(
                req.defaultParams.fields, 
                [...req.defaultParams.filters, new Filter('prestador_id', 'equal', req.prestadorId)], 
                req.defaultParams.sorts
            );
            
            const grupo_servico: GrupoServico[] = await this._grupoServicoService.listar(req.defaultParams);
            res.success({ content: grupo_servico})
        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                res.badRequest(error)
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error })
            }
        }
    }

    criar = async (req: Request, res: Response) => {
        try {
            const grupo_servico = await this._grupoServicoService.salvar(req.body);
            res.success({ message: 'Grupo Serviço criado com sucesso', content: grupo_servico })
        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                res.badRequest(error)
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error })
            }
        }
    }
}