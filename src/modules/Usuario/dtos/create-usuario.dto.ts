import { IsDate, IsDateString, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {
    @IsString({ message: 'O campo nome deve ser uma string' })
    @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
    nome: string;
    
    @IsString({ message: 'O campo email deve ser uma string' })
    @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
    email: string;
    
    @IsString({ message: 'A campo senha deve ser uma string' })
    @IsNotEmpty({ message: 'A campo senha não pode ser vazia' })
    senha: string;

    @IsString({ message: 'O campo confirmar senha deve ser uma string' })
    @IsNotEmpty({ message: 'O campo confirmar senha não pode ser vazio' })
    confirmarSenha: string;

    @IsInt({ message: 'O campo cpf deve ser um inteiro' })
    @IsNotEmpty({ message: 'O campo cpf não pode ser vazio' })
    cpf: number;

    @IsNotEmpty({ message: 'O campo data de nascimento não pode ser vazio' })
    data_nascimento: Date;
}