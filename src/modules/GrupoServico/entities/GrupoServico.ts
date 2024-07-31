import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../../core/shared/utils/BaseEntity";
import { Prestador } from "../../Prestador/entities/Prestador";
import { Servico } from "../../Servico/entities/Servico";
import { CreateGrupoServicoDto } from "../dtos/create-gruposervico.dto";
import { TipoServico } from "../../TipoServico/entities/TipoServico";

@Entity("grupo_servico")
export class GrupoServico extends BaseEntity {

    constructor(grupoServicoDto?: CreateGrupoServicoDto) {
        super();
        if (grupoServicoDto) {
            this.nome = grupoServicoDto.nome;
            this.prestador_id = grupoServicoDto.prestador_id;
            this.tipo_servico_id = grupoServicoDto.tipo_servico_id;
        }
    }

    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    nome: string;

    @Column()
    prestador_id: string;

    @Column()
    tipo_servico_id: string;

    @ManyToOne(() => Prestador, (prestador) => prestador.gruposServicos)
    @JoinColumn({ name: 'prestador_id' })
    prestador: Prestador;
    
    @OneToMany(() => Servico, (servico) => servico.grupo_servico)
    servicos: Servico;

    @ManyToOne(() => TipoServico, (tipoServico) => tipoServico.grupos_servicos)
    @JoinColumn({ name: 'tipo_servico_id' })
    tipo_servico: TipoServico;
}