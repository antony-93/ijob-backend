import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateUsuarios1719258715024 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("usuarios", [
            new TableColumn({
                name: 'data_nascimento',
                type: 'date',
            }),
            new TableColumn({
                name: 'cpf',
                type: 'bigint',
            }),
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("usuarios", [
            'data_nascimento',
            'cpf'
        ])
    }

}
