import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { Prestador } from "../../Prestador/entities/Prestador";
import { PrestadorService } from "../../Prestador/services/PrestadorService";
import { Usuario } from "../../Usuario/entities/Usuario";
import { UsuarioService } from "../../Usuario/services/UsuarioService";
import { AuthenticateDto } from "../dtos/Authenticate.dto";
import jwt from 'jsonwebtoken';

export class AuthenticateService {

    constructor(private readonly _usuarioService?: UsuarioService,
        private readonly _prestadorService?: PrestadorService
    ) { }

    autenticarUsuario = async (authenticateDto: AuthenticateDto): Promise<{ token: string, usuario: Usuario }> => {
        try {
            const usuario: Usuario = await this._usuarioService.getUsuarioByEmail(authenticateDto.email);

            if (!usuario) {
                throw new ValidationErrorFields('Usuário não encontrado!', { field: 'email' });
            }

            const isValidSenha = await usuario.compareSenha(authenticateDto.senha)

            if (!isValidSenha) {
                throw new ValidationErrorFields('Senha inválida!', { field: 'senha' });
            }

            const token = jwt.sign({ userId: usuario.id }, 'secret');

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

    autenticarPrestador = async (authenticateDto: AuthenticateDto): Promise<{ token: string, prestador: any }> => {
        try {
            const prestador: Prestador = await this._prestadorService.buscarPrestadorPorEmail(authenticateDto.email);

            if (!prestador) {
                throw new ValidationErrorFields('Usuário não encontrado!', { field: 'email' });
            }

            const isValidSenha = await prestador.compareSenha(authenticateDto.senha)

            if (!isValidSenha) {
                throw new ValidationErrorFields('Senha inválida!', { field: 'senha' });
            }

            const token = jwt.sign({ prestadorId: prestador.id }, 'secret');

            prestador.senha = authenticateDto.senha;

            return {
                token: token,
                prestador: prestador
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