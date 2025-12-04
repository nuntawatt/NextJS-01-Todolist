import { Module } from '@nestjs/common';
import { RealtimeWebsocketService } from './realtime-websocket.service';
import { RealtimeWebsocketGateway } from './realtime-websocket.gateway';

@Module({
  providers: [RealtimeWebsocketGateway, RealtimeWebsocketService],
})
export class RealtimeWebsocketModule {}
