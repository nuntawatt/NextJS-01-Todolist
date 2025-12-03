import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Morgorn - Welcome to the Todo List API';
  }
}
