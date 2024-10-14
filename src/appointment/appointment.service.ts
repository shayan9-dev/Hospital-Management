import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';
import { PatientService } from 'src/patient/patient.service';
import { DoctorService } from 'src/doctor/doctor.service';

@Injectable()
export class AppointmentService {
  constructor(@InjectRepository(Appointment) private readonly AppRepo:Repository<Appointment> ,private patientService:PatientService,private doctorService:DoctorService ){}


 async create(createAppointmentDto: CreateAppointmentDto,patientid:number,doctorid:number) {
    let appointment:Appointment = new Appointment()
    appointment.date = createAppointmentDto.date
    appointment.patient = await this.patientService.findOne(patientid);
    appointment.doctor = await this.doctorService.findOne(doctorid);
    return this.AppRepo.save(appointment);
  }

  findAll() {
    return  this.AppRepo.find();
  }

  findOne(id: number) {
    return this.AppRepo.findOne({where:{id}});
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    let appointment:Appointment = new Appointment()
    appointment.completed = true;
    appointment.advice = updateAppointmentDto.advice;
    appointment.id = id
    return this.AppRepo.save(appointment);
  }

  remove(id: number) {
    return this.AppRepo.delete(id);
  }
}
