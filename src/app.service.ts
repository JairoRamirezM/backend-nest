import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSaludoEspañol(): string {
    return 'Saludo en Español: Hola !';
  }

  getSaludoIngles(): string {
    return 'Saludo en Ingles: Hello !';
  }

  getSaludoFrances(): string {
    return 'Saludo en Frances: Bonjour tout le monde!';
  }
}
