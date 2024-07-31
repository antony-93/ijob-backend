import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { Prestador } from "../entities/Prestador";
import { IParams } from "../../../core/shared/interfaces/IParams";
import { createDefaultQuery } from "../../../core/shared/utils/QueryFunctions";

@EntityRepository(Prestador)  
export class PrestadorRepository extends Repository<Prestador> {
    
    async buscar(params: IParams, list?: boolean): Promise<any> {
        if (list) {
            return await createDefaultQuery<Prestador>("prestador", params).getMany();
        }

        return await createDefaultQuery<Prestador>("prestador", params).getOne();
    }

    async salvar(prestador: Prestador): Promise<Prestador> {
        return await this.save(prestador);
    }
}