import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
  @Get('listTask')
  listTask(): string {
    return 'Listar tarefas';
  }
}
