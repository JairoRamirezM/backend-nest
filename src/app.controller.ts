import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSaludoEspañol(): string {
    return this.appService.getSaludoEspañol();
  }

  //Saludo en Ingles
  @Get('SaludoIngles')
   getSaludoIngles(): string {
    return this.appService.getSaludoIngles();
  }

  //Saludo en Frances
  @Get('SaludoFrances')
   getSaludoFrances(): string {
    return this.appService.getSaludoFrances();
  }

    //Saludo en Peru
  @Get('SaludoPeru')
   getSaludoPeru(): string {
    return this.appService.getSaludoPeru();
  }
}
