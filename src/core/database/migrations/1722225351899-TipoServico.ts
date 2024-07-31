import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { BaseTableColumns } from "../../shared/utils/BaseTableColumns";

export class TipoServico1722225360885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

        await queryRunner.createTable(
            new Table({
                name: "tipo_servico",
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
                        name: "icone",
                        type: "varchar",
                        length: "5000",
                        isNullable: true
                    },
                    {
                        name: "pacote_icone",
                        type: "varchar",
                        length: "5000",
                        isNullable: true
                    },
                    ...BaseTableColumns
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tipo_servico");
    }

}
