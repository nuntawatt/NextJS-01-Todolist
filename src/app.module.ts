import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { Todo } from './todo/entities/todo.entity';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { RealtimeWebsocketModule } from './realtime-websocket/realtime-websocket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
         ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        entities: [Todo, User],
        synchronize: true,
      }),
    }),
    TodoModule,
    UsersModule,
    AuthModule,
    RealtimeWebsocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
