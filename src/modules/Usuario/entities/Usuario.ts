import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../../core/shared/utils/BaseEntity";
import { CreateUsuarioDto } from "../dtos/create-usuario.dto";
import bcrypt from 'bcrypt';
import { Endereco } from "../../Endereco/entities/Endereco";

@Entity("usuarios")
export class Usuario extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    nome: string;
    
    @Column()
    email: string;
    
    @Column()
    senha: string;

    @Column()
    cpf: number;

    @Column()
    data_nascimento: Date;

    @OneToMany(() => Endereco, (endereco) => endereco.usuario)
    enderecos: Endereco[];

    public setUsuarioByCreateUsuarioDto(usuarioDto: CreateUsuarioDto) {
        this.nome = usuarioDto.nome;
        this.email = usuarioDto.email;
        this.senha = usuarioDto.senha;
        this.cpf = usuarioDto.cpf;
        this.data_nascimento = usuarioDto.data_nascimento;
    }

    async hashSenha(): Promise<void> {
        const saltRounds = 10;
        this.senha = await bcrypt.hash(this.senha, saltRounds);
    }

    async compareSenha(senha: string): Promise<boolean> {
        return await bcrypt.compare(senha, this.senha);
    }
}