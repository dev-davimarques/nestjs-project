import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  solucinaHome(): string {
    return 'Home do Conceitos Manual Solucionanda.(Service)';
  }
}
