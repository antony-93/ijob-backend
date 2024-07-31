import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { BaseTableColumns } from "../../shared/utils/BaseTableColumns";

export class CreateEndereco1721827087441 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

        await queryRunner.createTable(
            new Table({
                name: "endereco",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "rua",
                        type: "varchar",
                        length: "5000"
                    },
                    {
                        name: "cep",
                        type: "bigint",
                    },
                    {
                        name: "numero",
                        type: "varchar"
                    },
                    {
                        name: "complemento",
                        type: "varchar",
                        length: "5000"
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                        length: "5000"
                    },
                    {
                        name: "estado",
                        type: "varchar",
                        length: "5000"
                    },
                    {
                        name: "bairro",
                        type: "varchar",
                        length: "5000"
                    },
                    ...BaseTableColumns
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("endereco");
    }
}
