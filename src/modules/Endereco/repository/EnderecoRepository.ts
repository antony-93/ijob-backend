import { Repository, SelectQueryBuilder } from "typeorm";
import { Endereco } from "../entities/Endereco";
import { IParams } from "../../../core/shared/interfaces/IParams";
import { applyFilters, createDefaultQuery } from "../../../core/shared/utils/QueryFunctions";

export class EnderecoRepository extends Repository<Endereco> {

    async get(params: IParams): Promise<Endereco[]> {
        return await createDefaultQuery<Endereco>("endereco", params).getMany();
    }
}