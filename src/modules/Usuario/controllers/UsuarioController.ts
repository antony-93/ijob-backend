import { Response, Request } from "express";
import { UsuarioService } from "../services/UsuarioService";
import { Usuario } from "../entities/Usuario";
import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";

export class UsuarioController {

    constructor(private readonly _usuarioService: UsuarioService) { }

    getUsuarios = async (req: Request, res: Response) => {
        try {
            const usuarios: Usuario[] = await this._usuarioService.getUsuarios();
            res.success(usuarios)
        } catch (error) {
            res.serverError({ message: 'Internal server error', error: error?.message })
        }
    }

    createUsuario = async (req: Request, res: Response) => {
        try {
            const usuario: Usuario = await this._usuarioService.saveNewUsuario(req.body);
            res.success({ message: 'Usuário criado com sucesso', content: usuario })
        } catch (error) {
            if (error instanceof ValidationErrorFields) {
                res.badRequest(error)
            } else {
                res.serverError({ message: 'Internal server error', error: error?.message || error })
            }
        }
    }
}