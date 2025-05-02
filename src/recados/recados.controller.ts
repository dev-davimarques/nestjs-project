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
  findAllController(@Query() pagination: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { limit = 10, offset = 0 } = pagination;
    // console.log(pagination);
    return this.recadosService.findAllService();
  }

  @Get(':id')
  findOneController(@Param('id') id: string) {
    return this.recadosService.findOneService(id);
  }

  @Post()
  createController(@Body() body: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.recadosService.createService(body);
  }

  @Patch(':id')
  updateController(@Param('id') id: string, @Body() body: any) {
    return this.recadosService.updateService(id, body);
  }

  @Delete(':id')
  removeController(@Param('id') id: string) {
    return this.recadosService.removeService(id);
  }
}
