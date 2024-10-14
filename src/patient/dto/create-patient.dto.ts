import { ApiProperty } from "@nestjs/swagger"

export class CreatePatientDto {

    @ApiProperty()
    name:string

    @ApiProperty()
    email:string

    @ApiProperty()
    password:string
}
