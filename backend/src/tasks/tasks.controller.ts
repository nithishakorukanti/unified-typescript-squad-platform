import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { EventsGateway } from '../events/events.gateway';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService,
    private readonly eventsGateway: EventsGateway,
  ) {}

  @Get()
  getTasks() {
    return this.tasksService.list();
  }

  @Patch(':id/status')
  updateTaskStatus(@Param('id') id: string, @Body() body: UpdateTaskStatusDto) {
    const task = this.tasksService.updateStatus(id, body.status);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    this.eventsGateway.emitTaskUpdated(task);
    return task;
  }

  @Get('stream/sse')
  sse(@Res() res: Response): void {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const intervalId = setInterval(() => {
      res.write(`data: ${JSON.stringify({ type: 'heartbeat', at: new Date().toISOString() })}\n\n`);
    }, 15000);

    res.on('close', () => {
      clearInterval(intervalId);
      res.end();
    });
  }
}
