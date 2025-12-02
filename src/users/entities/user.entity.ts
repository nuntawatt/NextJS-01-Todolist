import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Todo } from '../../todo/entities/todo.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude() // ซ่อน password ตอน response
  password: string;

  @Column({ nullable: true })
  fullName: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
