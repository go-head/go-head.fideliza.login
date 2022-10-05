import { Injectable, Logger } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  
  getHello(): string {
    this.logger.log('Chamou o jabacule');
    return 'Hello World!';
  }


  postLogin(user: string, password: string): User {
    this.logger.debug(`Call ${this.postLogin.name}`);
    this.logger.debug(`${user} : ${password}`);
        
    return { id: 'asd8', name: user, avatar:'d6d4s65fd4s6d54fs' } as User
  }
}
