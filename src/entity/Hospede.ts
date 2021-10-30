import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,

} from "typeorm";

@Entity()
export class Hospede {

    @PrimaryGeneratedColumn()
    idHospede: string;

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
