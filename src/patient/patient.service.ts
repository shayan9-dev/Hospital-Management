import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientService {

    constructor(@InjectRepository(Patient) private readonly patientRepo:Repository<Patient>){}

  create(createPatientDto: CreatePatientDto) {
    let patient:Patient = new Patient();
    patient.name = createPatientDto.name;
    patient.email = createPatientDto.email
    patient.password = createPatientDto.password
    return this.patientRepo.save(patient);
  }

  findAll() {
    return this.patientRepo.find();
  }

  findOne(id: number) {
    return this.patientRepo.findOne({where:{id}});
  }

  remove(id: number) {
    return this.patientRepo.delete(id);
  }
}
