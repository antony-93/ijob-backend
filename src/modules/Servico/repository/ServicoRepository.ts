import { BaseRepository } from "../../../core/shared/utils/BaseRepository";
import { Servico } from "../entities/Servico";

export class ServicoRepository extends BaseRepository<Servico> {
    constructor() {
        super("servico");
    }
}