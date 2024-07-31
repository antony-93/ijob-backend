import { EntityRepository } from "typeorm";
import { TipoServico } from "../entities/TipoServico";
import { BaseRepository } from "../../../core/shared/utils/BaseRepository";

@EntityRepository(TipoServico)  
export class TipoServicoRepository extends BaseRepository<TipoServico> {
    constructor() {
        super('tipo_servico')
    }
}