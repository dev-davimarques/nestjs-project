import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  getHome() {
    return 'Conceitos Automáticos (service)';
  }
}
