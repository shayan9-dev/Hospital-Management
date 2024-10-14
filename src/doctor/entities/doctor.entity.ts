import { Appointment } from "src/appointment/entities/appointment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @OneToMany(()=>Appointment,(App)=>App.doctor)
    appiontment:Appointment[]

    @Column()
    speciallist:string
}
