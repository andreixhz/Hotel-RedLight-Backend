import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class hospede1635545001732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "hospede",
                columns: [
                    {
                        name: "idHospede",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "senha",
                        type: "varchar",
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('hospede');
    }

}
