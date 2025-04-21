import { Controller, Get, Param } from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  // Retorna todos os recados
  @Get()
  findAll() {
    return this.recadosService.findAllService();
  }

  // Retorna apenas um recado
  @Get(':id')
  // Utilizaremos um Decorator de parâmetro @Param
  findOne(@Param('id') id: string) {
    // console.log(id);
    return this.recadosService.findOneService(id);
  }
}
