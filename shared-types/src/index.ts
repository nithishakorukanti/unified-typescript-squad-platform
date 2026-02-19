export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface TaskDto {
  id: string;
  title: string;
  assignee: string;
  status: TaskStatus;
  updatedAt: string;
}

export interface UpdateTaskStatusDto {
  status: TaskStatus;
}

export interface TaskFilterDto {
  assignee?: string;
  status?: TaskStatus;
  search?: string;
}
