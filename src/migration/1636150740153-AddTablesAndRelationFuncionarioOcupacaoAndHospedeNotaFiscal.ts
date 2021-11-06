import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTablesAndRelationFuncionarioOcupacaoAndHospedeNotaFiscal1636150740153 implements MigrationInterface {
    name = 'AddTablesAndRelationFuncionarioOcupacaoAndHospedeNotaFiscal1636150740153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comodidade" ("idComodidade" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a64d466839ee6002e1c9d07c896" PRIMARY KEY ("idComodidade"))`);
        await queryRunner.query(`CREATE TABLE "consumo" ("idConsumo" SERIAL NOT NULL, "data" TIMESTAMP NOT NULL, "quantidade" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5dabfd2a4a44fc897cf38fc5b70" PRIMARY KEY ("idConsumo"))`);
        await queryRunner.query(`CREATE TABLE "conta" ("idConta" SERIAL NOT NULL, "data" TIMESTAMP NOT NULL, "valorTotal" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cb70757a3cb82b82d8444947377" PRIMARY KEY ("idConta"))`);
        await queryRunner.query(`CREATE TABLE "ocupacao" ("idOcupacao" SERIAL NOT NULL, "nome" character varying NOT NULL, "salario" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7a80488d274fc6a7d9c6ef8bd8f" PRIMARY KEY ("idOcupacao"))`);
        await queryRunner.query(`CREATE TABLE "funcionario" ("idFuncionario" SERIAL NOT NULL, "idOcupacao" integer NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "telefone" character varying NOT NULL, "cpf" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_afd1547ac3837affc17312b2789" PRIMARY KEY ("idFuncionario"))`);
        await queryRunner.query(`CREATE TABLE "notaFiscal" ("idNotaFiscal" SERIAL NOT NULL, "dataEmissao" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "hospedeIdHospede" integer, CONSTRAINT "PK_bbe5b54bf0f2210d5e370f9142e" PRIMARY KEY ("idNotaFiscal"))`);
        await queryRunner.query(`CREATE TABLE "hospede" ("idHospede" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "telefone" character varying NOT NULL, "cpf" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7bf1934ad9fbe4cbefc1dfe9c1b" PRIMARY KEY ("idHospede"))`);
        await queryRunner.query(`CREATE TABLE "quarto" ("idQuarto" SERIAL NOT NULL, "nome" character varying NOT NULL, "tipo" character varying NOT NULL, "valorDiaria" numeric NOT NULL, "telefone" character varying NOT NULL, "cpf" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f6480aab5b0d0459e673da2e3a5" PRIMARY KEY ("idQuarto"))`);
        await queryRunner.query(`CREATE TABLE "reserva" ("idReserva" SERIAL NOT NULL, "adultos" integer NOT NULL, "criancas" integer NOT NULL, "checkIn" TIMESTAMP NOT NULL, "checkOut" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bd0e1407fbd81f816dfa262f4cc" PRIMARY KEY ("idReserva"))`);
        await queryRunner.query(`CREATE TABLE "servico" ("idServico" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b50eceed44e2eabdd0878fca96f" PRIMARY KEY ("idServico"))`);
        await queryRunner.query(`ALTER TABLE "funcionario" ADD CONSTRAINT "FK_df752115ad61f984b6f8d169abd" FOREIGN KEY ("idOcupacao") REFERENCES "ocupacao"("idOcupacao") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notaFiscal" ADD CONSTRAINT "FK_5e409f1d488d178d6f81ee3bfbd" FOREIGN KEY ("hospedeIdHospede") REFERENCES "hospede"("idHospede") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notaFiscal" DROP CONSTRAINT "FK_5e409f1d488d178d6f81ee3bfbd"`);
        await queryRunner.query(`ALTER TABLE "funcionario" DROP CONSTRAINT "FK_df752115ad61f984b6f8d169abd"`);
        await queryRunner.query(`DROP TABLE "servico"`);
        await queryRunner.query(`DROP TABLE "reserva"`);
        await queryRunner.query(`DROP TABLE "quarto"`);
        await queryRunner.query(`DROP TABLE "hospede"`);
        await queryRunner.query(`DROP TABLE "notaFiscal"`);
        await queryRunner.query(`DROP TABLE "funcionario"`);
        await queryRunner.query(`DROP TABLE "ocupacao"`);
        await queryRunner.query(`DROP TABLE "conta"`);
        await queryRunner.query(`DROP TABLE "consumo"`);
        await queryRunner.query(`DROP TABLE "comodidade"`);
    }

}
