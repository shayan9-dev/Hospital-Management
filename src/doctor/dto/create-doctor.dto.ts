import { ApiProperty } from "@nestjs/swagger"


export class CreateDoctorDto {
  
    @ApiProperty()
    name:string

    @ApiProperty()
    speciallist:string

    

}
