import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Hospital Management System')
    .setDescription('The Hospital Management System (HMS) backend offers a comprehensive solution for healthcare facilities by managing patient records, medical histories, and doctor schedules while automating appointment booking, prescription management, and billing. It integrates advanced security features like JWT-based authentication, role-based access control, and audit logging to protect sensitive patient data. The system also supports real-time reporting, inventory tracking, and payment processing, enhancing operational efficiency and patient care quality in hospitals.')
    .setVersion('1.0')
    .addTag('End Points')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
