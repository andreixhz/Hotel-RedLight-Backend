import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from "typeorm";

import { Ocupacao } from './Ocupacao'

@Entity()
export class Funcionario {
    
    @PrimaryGeneratedColumn()
    idFuncionario: string;
    
    @Column()
    idOcupacao: number;
    
    @JoinColumn({name: "idOcupacao"})
    @ManyToOne(() => Ocupacao)
    ocupacao: Ocupacao;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    telefone: string;

    @Column()
    cpf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
