import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,

} from "typeorm";

@Entity()
export class Quarto {

    @PrimaryGeneratedColumn()
    idQuarto: string;

    @Column()
    nome: string;
    
    @Column()
    tipo: string;
    
    @Column("decimal", {scale: 2})
    valorDiaria: number;

    @Column()
    telefone: string;
    
    @Column()
    cpf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
