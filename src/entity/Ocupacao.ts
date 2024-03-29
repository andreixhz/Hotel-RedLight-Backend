import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity()
export class Ocupacao {

    @PrimaryGeneratedColumn()
    idOcupacao: string;

    @OneToMany(type => Funcionario, ocupacao => Ocupacao)
    funcionarios: Funcionario[];

    @Column()
    nome: string;
 
    @Column("decimal", {scale: 2})
    salario: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
