import { Module } from '@nestjs/common';
import { EventsGateway } from './events/events.gateway';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, EventsGateway],
})
export class AppModule {}
