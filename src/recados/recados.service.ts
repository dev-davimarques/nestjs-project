import { Injectable } from '@nestjs/common';

@Injectable()
export class RecadosService {
  findAllService() {
    return 'Retorna todos os recados';
  }

  findByIdService(id: string) {
    return `Retorna o recado de ID: ${id}`;
  }
}
