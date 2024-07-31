import { Response, Request } from "express";
import { Endereco } from "../entities/Endereco";
import { EnderecoService } from "../services/EnderecoService";

export class EnderecoController {

    constructor(private readonly _enderecoService: EnderecoService) { }

    listar = async (req: Request, res: Response) => {
        try {
            const enderecos: Endereco[] = await this._enderecoService.listar(req.params);
            res.success(enderecos)
        } catch (error) {
            res.serverError({ message: 'Internal server error', error: error?.message })
        }
    }

}
