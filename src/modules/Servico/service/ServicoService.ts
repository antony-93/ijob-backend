import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { IParams } from "../../../core/shared/interfaces/IParams";
import { Filter } from "../../../core/shared/utils/Filters";
import { CreateServicoDto } from "../dtos/create-servico.dto";
import { Servico } from "../entities/Servico";
import { ServicoRepository } from "../repository/ServicoRepository";

export class ServicoService {

    constructor(private readonly _servicoRepository: ServicoRepository) {}

    async listar(params: IParams): Promise<Servico[]> {
        try {
            return await this._servicoRepository.buscar(params);
        } catch (error) {
            throw new Error('This is not my problem BROH');
        }
    }

    async buscarUm(params: IParams): Promise<Servico> {
        try {
            if (params.id) params.filters = [new Filter('id', 'equal', params.id)];
            return await this._servicoRepository.buscarUm(params);
        } catch (error) {
            throw new Error('This is not my problem BROH');
        }
    }

    async salvar(servicoDto: CreateServicoDto): Promise<Servico> {
        try {
            const servico: Servico = new Servico(servicoDto);
            return await this._servicoRepository.salvar(servico);
        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                throw error;
            } else {
                throw new Error('Erro ao criar novo servico!');
            }
        }
    }
}