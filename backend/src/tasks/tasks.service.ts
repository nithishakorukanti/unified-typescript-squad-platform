import type { TaskDto, TaskStatus } from '../../../shared-types/src';

export class TasksService {
  private readonly tasks: TaskDto[] = [
    {
      id: '1',
      title: 'Design shared DTO contracts',
      assignee: 'Nithisha',
      status: 'in_progress',
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Implement RTK Query endpoints',
      assignee: 'Squad',
      status: 'todo',
      updatedAt: new Date().toISOString(),
    },
  ];

  list(): TaskDto[] {
    return this.tasks;
  }

  updateStatus(id: string, status: TaskStatus): TaskDto | undefined {
    const task = this.tasks.find((item) => item.id === id);
    if (!task) return undefined;
    task.status = status;
    task.updatedAt = new Date().toISOString();
    return task;
  }
}
