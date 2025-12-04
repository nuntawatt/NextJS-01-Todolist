import { Test, TestingModule } from '@nestjs/testing';
import { RealtimeWebsocketGateway } from './realtime-websocket.gateway';
import { RealtimeWebsocketService } from './realtime-websocket.service';

describe('RealtimeWebsocketGateway', () => {
  let gateway: RealtimeWebsocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealtimeWebsocketGateway, RealtimeWebsocketService],
    }).compile();

    gateway = module.get<RealtimeWebsocketGateway>(RealtimeWebsocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
