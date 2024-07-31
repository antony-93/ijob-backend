import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { GrupoServico } from "../entities/GrupoServico";

export class CreateGrupoServicoDto implements Partial<GrupoServico> {

    @IsString({ message: 'O campo nome deve ser uma string' })
    @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })    
    nome?: string;

    @IsString({ message: 'O código do prestador deve ser uma string' })
    @IsNotEmpty({ message: 'O código do prestador não pode ser vazio' })    
    prestador_id?: string;

    @IsString({ message: 'O código do tipo de serviço deve ser uma string' })
    @IsNotEmpty({ message: 'O código do tipo de serviço não pode ser vazio' })
    tipo_servico_id?: string;
}