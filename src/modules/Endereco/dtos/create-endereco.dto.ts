import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEnderecoDto {
    @IsString({ message: 'O campo rua deve ser uma string' })
    @IsNotEmpty({ message: 'O campo rua não pode ser vazio' })
    rua: string;

    @IsString({ message: 'O campo bairro deve ser uma string' })
    @IsNotEmpty({ message: 'O campo bairro não pode ser vazio' })
    bairro: string;

    @IsString({ message: 'O campo cidade deve ser uma string' })
    @IsNotEmpty({ message: 'O campo cidade não pode ser vazio' })
    cidade: string;
    
    @IsString({ message: 'O campo estado deve ser uma string' })
    @IsNotEmpty({ message: 'O campo estado não pode ser vazio' })
    estado: string;
    
    @IsInt({ message: 'O campo cep deve ser um inteiro' })
    @IsNotEmpty({ message: 'O campo cep não pode ser vazio' })
    cep: number;
    
    @IsInt({ message: 'O campo número deve ser um inteiro' })
    @IsNotEmpty({ message: 'O campo número não pode ser vazio' })
    numero: string;

    @IsString({ message: 'O campo complemento deve ser uma string' })
    complemento: string;

    @IsNotEmpty({ message: 'O campo data de nascimento não pode ser vazio' })
    data_nascimento: Date;
}