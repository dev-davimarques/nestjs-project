import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  throwNotFoundError() {
    // throw new HttpException('Recado não encontrado', HttpStatus.NOT_FOUND);
    throw new NotFoundException('Recado não encontrado');
  }

  findAllService() {
    return this.recados;
  }

  findOneService(id: string) {
    const recado = this.recados.find((item) => item.id === +id);
    if (recado) {
      return recado;
    }
    this.throwNotFoundError();
  }

  createService(body: any) {
    this.lastId++;
    const id = this.lastId;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const novoRecado = {
      id,
      ...body,
    };
    this.recados.push(novoRecado);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return novoRecado;
  }

  updateService(id: string, body: any) {
    const recadoExistenteIndex = this.recados.findIndex(
      (item) => item.id === +id,
    );

    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    if (recadoExistenteIndex >= 0) {
      const recadoExistente = this.recados[recadoExistenteIndex];

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...body,
      };
    }

    return this.recados[recadoExistenteIndex];
  }

  removeService(id: string) {
    const recadoExistenteIndex = this.recados.findIndex(
      (item) => item.id === +id,
    );

    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    const recado = this.recados[recadoExistenteIndex];
    this.recados.splice(recadoExistenteIndex, 1);

    return recado;
  }
}
