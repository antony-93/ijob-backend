import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreateUsuarios1718145638347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "sobrenome",
                        type: "varchar"
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "_linkImage",
                        type: "varchar",
                        length: "1000"
                    },
                    {
                        name: "criado_em",
                        type: "Timestamp",
                        default: "now()"
                    },
                    {
                        name: "atualizado_em",
                        type: "Timestamp"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }

}
