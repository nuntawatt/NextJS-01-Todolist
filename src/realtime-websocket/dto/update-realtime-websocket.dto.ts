import { PartialType } from '@nestjs/mapped-types';
import { CreateRealtimeWebsocketDto } from './create-realtime-websocket.dto';

export class UpdateRealtimeWebsocketDto extends PartialType(CreateRealtimeWebsocketDto) {
  id: number;
}
