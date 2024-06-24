import { IsNotEmpty, IsString } from "class-validator";

export class AuthenticateDto {
    @IsString({ message: 'O campo email deve ser uma string' })
    @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
    email: string;
    
    @IsString({ message: 'O campo senha deve ser uma string' })
    @IsNotEmpty({ message: 'O campo senha não pode ser vazio' })
    senha: string;
}