import { Doctor } from "src/doctor/entities/doctor.entity";
import { Patient } from "src/patient/entities/patient.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Appointment {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    date:string;

    @ManyToOne(()=>Patient,(patient)=>patient.appiontment)
    patient:Patient

    @ManyToOne(()=>Doctor,(doctor)=>doctor.appiontment)
    doctor:Doctor

    @Column({default:false})
    completed:boolean;

    @Column({default:null})
    advice:string
}
