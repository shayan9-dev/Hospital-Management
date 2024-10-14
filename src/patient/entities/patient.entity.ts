import { Appointment } from "src/appointment/entities/appointment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @OneToMany(()=>Appointment,(app)=>app.patient)
    appiontment:Appointment[]
}
