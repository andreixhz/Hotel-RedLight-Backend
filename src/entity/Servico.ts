import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity()
export class Servico {

    @PrimaryGeneratedColumn()
    idServico: string;

    @Column()
    nome: string;
 
    @Column()
    descricao: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
