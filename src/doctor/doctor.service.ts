import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DoctorService {
  constructor(@InjectRepository(Doctor) private readonly doctorRepo:Repository<Doctor>){}

  create(createDoctorDto: CreateDoctorDto) {
   let doctor:Doctor = new Doctor();
   doctor.name = createDoctorDto.name;
   doctor.speciallist = createDoctorDto.speciallist;
   return this.doctorRepo.save(doctor)
  }

  findAll() {
    return this.doctorRepo.find();
  }

  findOne(id: number) {
    return this.doctorRepo.findOne({where:{id}});
  }


  remove(id: number) {
    return this.doctorRepo.delete(id);
  }
}
