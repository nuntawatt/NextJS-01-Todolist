import { IsString, IsOptional, IsIn } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn(['pending', 'in-progress', 'completed'], {
    message: 'status pending, in-progress, completed',
  })
  status?: string;
}
