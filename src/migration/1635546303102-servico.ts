import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class servico1635546303102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "servico",
                columns: [
                    {
                        name: "idServico",
                        type: "integer",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("servico")
    }

}
