import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../../core/shared/utils/BaseEntity";
import { Usuario } from "../../Usuario/entities/Usuario";

@Entity("endereco")
export class Endereco extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    rua: string;

    @Column()
    bairro: string;

    @Column()
    estado: string;
    
    @Column()
    cidade: string;

    @Column()
    cep: number;

    @Column()
    complemento: string;

    @Column()
    numero: number;

    @Column()
    usuario_id: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.enderecos)
    @JoinColumn({ name: "usuario_id" })
    usuario: Usuario;
}