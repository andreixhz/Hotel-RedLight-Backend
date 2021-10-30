import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class comodidade1635468629993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "comodidade",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isGenerated: true,
                    generationStrategy: "increment",
                    isPrimary: true,
                    isUnique: true
                },
                {
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "descricao",
                    type: "varchar",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comodidade');
    }

}
