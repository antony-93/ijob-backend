import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class UpdateEndereco1721827982165 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("endereco", [
            new TableColumn({
                name: 'usuario_id',
                type: 'uuid',
            })
        ])

        await queryRunner.createForeignKey('endereco', new TableForeignKey({
            name: 'fk_endereco_usuario',
            columnNames: ['usuario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuarios',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('endereco');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('usuario_id') !== -1);
        
        await queryRunner.dropForeignKey('endereco', foreignKey);
        await queryRunner.dropColumn('endereco', 'usuario_id');
    }
}
