import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../../core/shared/utils/BaseEntity";
import { Servico } from "../../Servico/entities/Servico";
import { GrupoServico } from "../../GrupoServico/entities/GrupoServico";

@Entity("tipo_servico")
export class TipoServico extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    nome: string;

    @Column()
    icone: string;

    @Column()
    pacote_icone: string;

    @OneToMany(() => GrupoServico, (grupo_servico) => grupo_servico.tipo_servico)
    grupos_servicos: GrupoServico;
}