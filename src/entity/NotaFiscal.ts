import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { Hospede } from "./Hospede";

@Entity('notaFiscal')
export class NotaFiscal {

    @PrimaryGeneratedColumn()
    idNotaFiscal: string;
    
    @Column()
    idHospede: number;
    
    @JoinColumn({name: "idHospede"})
    @ManyToOne(() => Hospede)
    hospede: Hospede;

    @Column()
    dataEmissao: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
