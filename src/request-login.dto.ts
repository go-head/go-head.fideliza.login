import { ApiProperty } from "@nestjs/swagger";

export class RequestLoginDto {
  @ApiProperty()
  user: string;
  
  @ApiProperty()
  password: string;
}