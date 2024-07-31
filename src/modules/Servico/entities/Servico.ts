import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../../core/shared/utils/BaseEntity";
import { TipoServico } from "../../TipoServico/entities/TipoServico";
import { GrupoServico } from "../../GrupoServico/entities/GrupoServico";
import { CreateServicoDto } from "../dtos/create-servico.dto";

@Entity("servico")
export class Servico extends BaseEntity {

    constructor(servicoDto: CreateServicoDto) {
        super();
        if (servicoDto) {
            this.nome = servicoDto.nome;
            this.descricao = servicoDto.descricao;
            this.preco = servicoDto.preco;
            this.grupo_servico_id = servicoDto.grupo_servico_id;
        }
    }

    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    preco: number;

    @Column()
    grupo_servico_id: string;
    
    @ManyToOne(() => GrupoServico, (grupo_servico) => grupo_servico.servicos)
    @JoinColumn({ name: 'grupo_servico_id' })
    grupo_servico: GrupoServico;
}