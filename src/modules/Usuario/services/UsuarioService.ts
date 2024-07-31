import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { CreateUsuarioDto } from "../dtos/create-usuario.dto";
import { Usuario } from "../entities/Usuario";
import { UsuarioRepository } from "../repositorys/UsuarioRepository";

export class UsuarioService {

    constructor (private _usuarioRepository: UsuarioRepository) { }

    async getUsuarios(filters?: Partial<Usuario>): Promise<Usuario[]> {
        try {
            return await this._usuarioRepository.getAll(filters);
        } catch(error) {
            throw new Error('This is not my problem BROH');
        }
    }

    async saveNewUsuario(usuarioDto: CreateUsuarioDto): Promise<Usuario> {
        try {
            if (usuarioDto.senha !== usuarioDto.confirmarSenha) {
                throw new ValidationErrorFields('As senhas precisam ser iguais!', { field: 'confirmarSenha' });
            }

            const usuarioByEmail: Usuario = await this.getUsuarioByEmail(usuarioDto.email);

            if (usuarioByEmail) {
                throw new ValidationErrorFields('Já existe uma conta criada com este e-mail!', { field: 'email' });
            }
            
            const usuario: Usuario = new Usuario();
            usuario.setUsuarioByCreateUsuarioDto(usuarioDto);
            await usuario.hashSenha();

            const resUsuario = await this._usuarioRepository.saveUsuario(usuario);
            resUsuario.senha = usuarioDto.senha;
            return resUsuario;
        } catch(error) {
            if (error instanceof ValidationErrorFields) {
                throw error;
            } else {
                throw new Error('Erro ao criar novo usuário!');
            }
        }
    }

    async getUsuarioByEmail(email: string): Promise<Usuario> {
        try {
            return await this._usuarioRepository.getByEmail(email);
        } catch(error) {
            throw new Error('This is not my problem BROH');
        }
    }
}