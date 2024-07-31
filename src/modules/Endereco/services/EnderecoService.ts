import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { IParams } from "../../../core/shared/interfaces/IParams";
import { Endereco } from "../entities/Endereco";
import { EnderecoRepository } from "../repository/EnderecoRepository";

export class EnderecoService {

    constructor (private _enderecoRepository: EnderecoRepository) { }

    async listar(params: IParams): Promise<Endereco[]> {
        try {
            return await this._enderecoRepository.get(params);
        } catch (error) {
            throw new Error("Erro ao listar os endereços!");
        }
    }
}