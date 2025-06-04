import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Perkin! ss';
  }

  getHelloIngles(): string {
    return 'Hello Perkin!';
  }
}
