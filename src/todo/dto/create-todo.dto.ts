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
    message: 'status ต้องเป็น pending, in-progress, หรือ completed เท่านั้น',
  })
  status?: string;
}
