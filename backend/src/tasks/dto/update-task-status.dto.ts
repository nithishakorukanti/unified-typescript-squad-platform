import { IsIn } from 'class-validator';
import type { TaskStatus } from '../../../../shared-types/src';

export class UpdateTaskStatusDto {
  @IsIn(['todo', 'in_progress', 'done'])
  status!: TaskStatus;
}
