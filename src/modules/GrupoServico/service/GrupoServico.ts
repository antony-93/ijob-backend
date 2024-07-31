import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { IParams } from "../../../core/shared/interfaces/IParams";
import { CreateGrupoServicoDto } from "../dtos/create-gruposervico.dto";
import { GrupoServico } from "../entities/GrupoServico";
import { GrupoServicoRepository } from "../repository/GrupoServicoRepository";

export class GrupoServicoService {

    constructor (private _grupoServicoRepository: GrupoServicoRepository) { }

    async listar(params: IParams): Promise<GrupoServico[]> {
        try {
            return await this._grupoServicoRepository.buscar(params);
        } catch(error) {
            throw new Error('Erro ao listar grupos de serviço!');
        }
    }

    async salvar(grupoServicoDto: CreateGrupoServicoDto): Promise<GrupoServico> {
        try {
            const grupoServico: GrupoServico = new GrupoServico(grupoServicoDto);
            console.log(grupoServico)
            return await this._grupoServicoRepository.salvar(grupoServico);
        } catch(error) {
            if (error instanceof ValidationErrorFields) {
                throw error;
            } else {
                throw new Error('Erro ao criar novo grupo de serviço!');
            }
        }
    }
}