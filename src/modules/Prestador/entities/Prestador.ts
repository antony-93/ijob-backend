import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../../core/shared/utils/BaseEntity";
import bcrypt from 'bcrypt';
import { CreatePrestadorEmpresaDto } from "../dtos/create-prestador-empresa.dto";
import { GrupoServico } from "../../GrupoServico/entities/GrupoServico";

@Entity("prestador")
export class Prestador extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    nome: string;

    @Column()
    nome_fantasia: string;
    
    @Column()
    razao_social: string;
    
    @Column()
    cpf_cnpj: number;
    
    @Column()
    email: string;
    
    @Column()
    senha: string;

    @OneToMany(() => GrupoServico, (grupoServico) => grupoServico.prestador)
    gruposServicos: GrupoServico[];

    public setPrestadorByEmpresaDto(prestadorDto: CreatePrestadorEmpresaDto) {
        this.nome_fantasia = prestadorDto.nome_fantasia;
        this.razao_social = prestadorDto.razao_social;
        this.email = prestadorDto.email;
        this.senha = prestadorDto.senha;
        this.cpf_cnpj = prestadorDto.cpf_cnpj;
    }

    async hashSenha(): Promise<void> {
        const saltRounds = 10;
        this.senha = await bcrypt.hash(this.senha, saltRounds);
    }

    async compareSenha(senha: string): Promise<boolean> {
        return await bcrypt.compare(senha, this.senha);
    }
}