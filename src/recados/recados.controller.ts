import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAllController(@Query() pagination: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { limit = 10, offset = 0 } = pagination;
    const recados = await this.recadosService.findAllService();

    return recados;
  }

  @Get(':id')
  findOneController(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.findOneService(id);
  }

  @Post()
  createController(@Body() createRecadoDto: CreateRecadoDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.recadosService.createService(createRecadoDto);
  }

  @Patch(':id')
  updateController(
    @Param('id') id: string,
    @Body() updateRecadoDto: UpdateRecadoDto,
  ) {
    return this.recadosService.updateService(id, updateRecadoDto);
  }

  @Delete(':id')
  removeController(@Param('id', ParseIntPipe) id: number) {
    console.log(id, typeof id);
    return this.recadosService.removeService(id);
  }
}
