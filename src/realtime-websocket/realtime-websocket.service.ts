import { Injectable } from '@nestjs/common';
import { CreateRealtimeWebsocketDto } from './dto/create-realtime-websocket.dto';
import { UpdateRealtimeWebsocketDto } from './dto/update-realtime-websocket.dto';

@Injectable()
export class RealtimeWebsocketService {
  create(createRealtimeWebsocketDto: CreateRealtimeWebsocketDto) {
    return 'This action adds a new realtimeWebsocket';
  }

  findAll() {
    return `This action returns all realtimeWebsocket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} realtimeWebsocket`;
  }

  update(id: number, updateRealtimeWebsocketDto: UpdateRealtimeWebsocketDto) {
    return `This action updates a #${id} realtimeWebsocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} realtimeWebsocket`;
  }
}
