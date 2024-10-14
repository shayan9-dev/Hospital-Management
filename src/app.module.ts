import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';



@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.pro.env'] }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      url: configService.get<string>('DATABASE_URL'),
      ssl: {
        rejectUnauthorized: false, 
      },
      autoLoadEntities: true,
      synchronize: configService.get('DATABASE_SYNC'),
      entities: [__dirname + '/**/*.entity{.ts,.js}']

    })
  }),
  PatientModule,
  DoctorModule,
  AppointmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
