import { EntityRepository } from "typeorm";
import { BaseRepository } from "../../../core/shared/utils/BaseRepository";
import { GrupoServico } from "../entities/GrupoServico";

@EntityRepository(GrupoServico)  
export class GrupoServicoRepository extends BaseRepository<GrupoServico> {

    constructor() {
        super("grupo_servico");
    }
}