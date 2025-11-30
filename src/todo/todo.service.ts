import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { pool } from '../database';

@Injectable()
export class TodoService {

  async create(createTodoDto: CreateTodoDto) {
    const { title, description } = createTodoDto;

    const result = await pool.query(
      `INSERT INTO todo (title, description)
       VALUES ($1, $2)
       RETURNING *`,
      [title, description]
    );

    return result.rows[0];
  }

  async findAll() {
    const result = await pool.query(`SELECT * FROM todo ORDER BY id ASC`);
    return result.rows;
  }

  async findOne(id: number) {
    const result = await pool.query(
      `SELECT * FROM todo WHERE id = $1`,
      [id]
    );
    return result.rows[0];
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const { title, description, status } = updateTodoDto;

    const result = await pool.query(
      `UPDATE todo
       SET 
          title = COALESCE($1, title),
          description = COALESCE($2, description),
          status = COALESCE($3, status)
       WHERE id = $4
       RETURNING *`,
      [title, description, status, id]
    );

    return result.rows[0];
  }

  async remove(id: number) {
    await pool.query(`DELETE FROM todo WHERE id = $1`, [id]);
    return { message: `Todo with id ${id} has been removed` };
  }
}
