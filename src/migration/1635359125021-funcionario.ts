import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class funcionario1635359125021 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "funcionario",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "idOcupacao",
                        type: "int"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "255"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255"
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        length: "255"
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        // Ver se precisa de tamanho
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "11"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKOcupacaoFuncionario",
                        referencedTableName: "ocupacao",
                        referencedColumnNames: ["idOcupacao"],
                        columnNames: ["idOcupacao"],
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('funcionario');
    }


}
