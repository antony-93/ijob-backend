import { ValidationErrorFields } from "../../../core/shared/errors/ValidationErrorFields";
import { IParams } from "../../../core/shared/interfaces/IParams";
import { Filter } from "../../../core/shared/utils/Filters";
import { Params } from "../../../core/shared/utils/Params";
import { CreatePrestadorEmpresaDto } from "../dtos/create-prestador-empresa.dto";
import { Prestador } from "../entities/Prestador";
import { PrestadorRepository } from "../repositorys/PrestadorRepository";

export class PrestadorService {

    constructor (private _prestadorRepository: PrestadorRepository) { }

    async listar(params: IParams): Promise<Prestador[]> {
        try {
            return await this._prestadorRepository.buscar(params);
        } catch(error) {
            throw new Error('This is not my problem BROH');
        }
    }

    async salvar(prestadorDto: CreatePrestadorEmpresaDto): Promise<Prestador> {
        try {
            if (prestadorDto.senha !== prestadorDto.confirmarSenha) {
                throw new ValidationErrorFields('As senhas precisam ser iguais!', { field: 'confirmarSenha' });
            }
            
            const prestadorByEmail: Prestador = await this.buscarPrestadorPorEmail(prestadorDto.email);
            
            if (prestadorByEmail) {
                throw new ValidationErrorFields('Já existe uma conta criada com este e-mail!', { field: 'email' });
            }
            
            const prestador: Prestador = new Prestador();
            prestador.setPrestadorByEmpresaDto(prestadorDto);
            await prestador.hashSenha();

            const resPrestador = await this._prestadorRepository.salvar(prestador);
            resPrestador.senha = prestadorDto.senha;
            return resPrestador;
        } catch(error) {
            if (error instanceof ValidationErrorFields) {
                throw error;
            } else {
                throw new Error('Erro ao criar novo usuário!');
            }
        }
    }

    async buscarPrestadorPorEmail(email: string): Promise<Prestador> {
        try {
            const filter = new Filter('email', 'equal', email),
                params = new Params(['id', 'nome', 'email', 'cpf_cnpj', 'razao_social', 'nome_fantasia'], [filter]);

            return await this._prestadorRepository.buscar(params);
        } catch(error) {
            throw new Error('Erro ao buscar prestador por e-mail!');
        }
    }
}