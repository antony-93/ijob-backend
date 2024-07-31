import { IParams } from "../../../core/shared/interfaces/IParams";
import { TipoServico } from "../entities/TipoServico";
import { TipoServicoRepository } from "../repository/TipoServicoRepository";

export class TipoServicoService {

    constructor (private _tipoServicoRepository: TipoServicoRepository) { }

    async listar(params: IParams): Promise<TipoServico[]> {
        try {
            return await this._tipoServicoRepository.buscar(params);
        } catch(error) {
            console.log(error)
            throw new Error('Erro ao listar tipos de serviço!');
        }
    }
}