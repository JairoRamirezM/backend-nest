import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloEspañol(): string {
    return 'Hola Perkin!';
  }

  getHelloIngles(): string {
    return 'Hello Perkin!';
  }
}
