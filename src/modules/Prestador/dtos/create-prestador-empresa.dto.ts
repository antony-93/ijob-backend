import { IsDate, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePrestadorEmpresaDto {

    @IsOptional()
    @IsString({ message: 'O campo nome fantasia deve ser uma string' })
    nome_fantasia: string;
    
    @IsString({ message: 'O campo razão social deve ser uma string' })
    @IsNotEmpty({ message: 'O campo razão social não pode ser vazio' })
    razao_social: string;
    
    @IsString({ message: 'O campo email deve ser uma string' })
    @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
    email: string;
    
    @IsString({ message: 'A campo senha deve ser uma string' })
    @IsNotEmpty({ message: 'A campo senha não pode ser vazia' })
    senha: string;

    @IsString({ message: 'O campo confirmar senha deve ser uma string' })
    @IsNotEmpty({ message: 'O campo confirmar senha não pode ser vazio' })
    confirmarSenha: string;

    @IsInt({ message: 'O campo cnpj deve ser um inteiro' })
    @IsNotEmpty({ message: 'O campo cnpj não pode ser vazio' })
    cpf_cnpj: number;
}