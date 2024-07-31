import { Response, Request } from "express";
import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { TipoServico } from "../entities/TipoServico";
import { TipoServicoService } from "../services/TipoServicoService";

export class TipoServicoController {

    constructor(private readonly _tipoServicoService: TipoServicoService) { }

    listar = async (req: Request, res: Response) => {
        try {
            const prestadores: TipoServico[] = await this._tipoServicoService.listar(req.defaultParams);
            res.success({ content: prestadores})
        } catch (error) {
            console.log(error)
            res.serverError({ message: 'Internal server error', error: error?.message })
        }
    }
}