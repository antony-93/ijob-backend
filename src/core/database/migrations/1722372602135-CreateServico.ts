import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { BaseTableColumns } from "../../shared/utils/BaseTableColumns";

export class CreateServico1722372602135 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

        await queryRunner.createTable(
            new Table({
                name: "servico",
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
                        name: "descricao",
                        type: "varchar",
                        length: "5000",
                        isNullable: true
                    },
                    {
                        name: "preco",
                        type: "decimal",
                    },
                    {
                        name: "grupo_servico_id",
                        type: "uuid"
                    },
                    ...BaseTableColumns
                ],
                foreignKeys: [
                    {
                        name: "fk_servico_grupo_servico",
                        columnNames: ["grupo_servico_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "grupo_servico",
                        onDelete: "CASCADE",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("servico");
    }

}
