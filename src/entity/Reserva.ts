import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,

} from "typeorm";

@Entity()
export class Reserva {

    @PrimaryGeneratedColumn()
    idReserva: string;

    @Column()
    adultos: number;
    
    @Column()
    criancas: number;
    
    @Column()
    checkIn: Date;

    @Column()
    checkOut: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
