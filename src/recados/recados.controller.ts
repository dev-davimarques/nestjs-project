import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { limit = 10, offset = 0 } = pagination;
    return `Retorna todos os recados Limit=${limit},  Offset=${offset}.`;
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.recadosService.findByIdService(id);
  }

  @Post()
  create(@Body() body: string) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota apaga o recado com ID: ${id}`;
  }
}
