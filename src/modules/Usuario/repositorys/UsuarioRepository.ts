import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { Usuario } from "../entities/Usuario";

@EntityRepository(Usuario)  
export class UsuarioRepository extends Repository<Usuario> {
    
    usuarioQuery: SelectQueryBuilder<Usuario>
    
    async getAll(filters?: Partial<Usuario>): Promise<Usuario[]> {
        return await this.createQueryBuilder("usuario")
            .getMany();
    }

    async saveUsuario(usuario: Usuario): Promise<Usuario> {
        return await this.save(usuario);
    }

    async getByEmail(email: string): Promise<Usuario> {
        return this.createQueryBuilder("usuario")
            .where("usuario.email = :email", { email: email })
            .getOne();
    }
}