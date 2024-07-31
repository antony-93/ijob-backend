import { Repository, DeepPartial } from "typeorm";
import { IParams } from "../../../core/shared/interfaces/IParams";
import { createDefaultQuery } from "../../../core/shared/utils/QueryFunctions";

export class BaseRepository<T> extends Repository<T> {
    constructor(private queryName: string) {
        super();
    }

    async buscar(params: IParams): Promise<T[]> {
        return await createDefaultQuery<T>(this.queryName, params).getMany();
    }

    async buscarUm(params: IParams): Promise<T> {
        return await createDefaultQuery<T>(this.queryName, params).getOne();
    }

    async salvar(entity: DeepPartial<T>): Promise<T> {
        try {
            return await this.save(entity);
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao criar novo registro!');
        }
    }
}
