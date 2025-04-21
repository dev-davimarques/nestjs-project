import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from 'src/task/task.module';
import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.module';
import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';

@Module({
  imports: [TaskModule, ConceitosManualModule, ConceitosAutomaticoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
