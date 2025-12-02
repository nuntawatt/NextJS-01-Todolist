import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
  ) {}

  // Create
  async create(createTodoDto: CreateTodoDto) {
    const newTodo = this.todoRepo.create({
      title: createTodoDto.title,
      description: createTodoDto.description,
      status: createTodoDto.status ?? 'pending',
    });

    return this.todoRepo.save(newTodo);
  }

  // Read all
  findAll() {
    return this.todoRepo.find({
      order: { createdAt: 'DESC' },
    });
  }

  // Read one
  async findOne(id: number) {
    const todo = await this.todoRepo.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`ไม่พบ Todo ที่มี id = ${id}`);
    }
    return todo;
  }

  // Update
  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id);
    const updated = { ...todo, ...updateTodoDto };
    return this.todoRepo.save(updated);
  }

  // Delete
  async remove(id: number) {
    const todo = await this.findOne(id);
    await this.todoRepo.remove(todo);
    return { message: `ลบรายการ id ${id} แล้วนะ` };
  }
}