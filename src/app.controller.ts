import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { User } from './models/user.model';
import { RequestLoginDto } from './request-login.dto';

@ApiTags('login')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    
  }

  @Post('login')
  postLogin(@Body() requesLogin: RequestLoginDto): User {
    return this.appService.postLogin(requesLogin.user, requesLogin.password);
  }
}
