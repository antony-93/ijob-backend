import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Servico } from "../entities/Servico";

export class CreateServicoDto implements Partial<Servico> {
    @IsString({ message: 'O campo nome deve ser uma string' })
    @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
    nome?: string;

    @IsNumber({}, { message: 'O campo preço deve ser um número' })
    @IsNotEmpty({ message: 'O campo preço não pode ser vazio' })
    preco?: number;

    @IsString({ message: 'O campo descrição deve ser uma string' })
    @IsNotEmpty({ message: 'O campo descrição não pode ser vazio' })
    descricao?: string;

    @IsString({ message: 'O código do grupo deve ser uma string' })
    @IsNotEmpty({ message: 'O código do grupo não pode ser vazio' })
    grupo_servico_id?: string;
}