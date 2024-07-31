import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { BaseTableColumns } from "../../shared/utils/BaseTableColumns";

export class CreatePrestador1722175013906 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

        await queryRunner.createTable(
            new Table({
                name: "prestador",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "5000",
                        isNullable: true
                    },
                    {
                        name: "nome_fantasia",
                        type: "varchar",
                        length: "5000",
                        isNullable: true
                    },
                    {
                        name: "razao_social",
                        type: "varchar",
                        length: "5000",
                        isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "5000",
                        isUnique: true
                    },
                    {
                        name: "cpf_cnpj",
                        type: "bigint",
                        isUnique: true
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        length: "5000",
                        isUnique: true
                    },
                    ...BaseTableColumns
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("prestador");
    }

}
