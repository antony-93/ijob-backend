import { CreateDateColumn } from "typeorm";

export class BaseEntity {
    @CreateDateColumn()
    cadastrado_em: Date;

    @CreateDateColumn()
    atualizado_em: Date;
}