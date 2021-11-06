import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Consumo {

    @PrimaryGeneratedColumn()
    idConsumo: string;

    @Column()
    data: Date;

    @Column()
    quantidade: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
