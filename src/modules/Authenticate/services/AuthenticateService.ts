import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { Usuario } from "../../Usuario/entities/Usuario";
import { UsuarioService } from "../../Usuario/services/UsuarioService";
import { AuthenticateDto } from "../dtos/Authenticate.dto";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthenticateService {

    constructor(private readonly _usuarioService: UsuarioService) { }

    authenticate = async (authenticateDto: AuthenticateDto): Promise<{ token: string, usuario: Usuario }> => {
        try {
            const usuario: Usuario = await this._usuarioService.getUsuarioByEmail(authenticateDto.email);

            if (!usuario) {
                throw new ValidationErrorFields('Usuário não encontrado!', { field: 'email' });
            }

            const isValidSenha = await usuario.compareSenha(authenticateDto.senha)

            if (!isValidSenha) {
                throw new ValidationErrorFields('Senha inválida!', { field: 'senha' });
            }

            const token = jwt.sign({ id: usuario.id }, 'secret');
            
            return {
                token: token,
                usuario: usuario
            }

        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                throw error
            } else {
                throw new Error('Erro ao autenticar usuário!');
            }
        }
    }
}