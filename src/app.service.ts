import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSaludoEspañol(): string {
    return 'Saludo en Español: Hola Perkin!';
  }

  getSaludoIngles(): string {
    return 'Saludo en Ingles: Hello Perkin!';
  }

  getSaludoFrances(): string {
    return 'Saludo en Frances: Bonjour tout le monde Perkin!';
  }
}
