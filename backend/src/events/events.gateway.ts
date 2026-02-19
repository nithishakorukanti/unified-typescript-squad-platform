import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import type { Server } from 'socket.io';
import type { TaskDto } from '../../../shared-types/src';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventsGateway {
  @WebSocketServer()
  server!: Server;

  emitTaskUpdated(task: TaskDto): void {
    this.server.emit('task.updated', task);
  }
}
