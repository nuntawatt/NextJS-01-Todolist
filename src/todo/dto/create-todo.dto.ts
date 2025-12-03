import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum TodoStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
}

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TodoStatus, { message: 'status ต้องเป็น pending, in-progress, completed' })
  @IsOptional()
  status?: TodoStatus;
}
