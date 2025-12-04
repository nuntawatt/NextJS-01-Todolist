import { Test, TestingModule } from '@nestjs/testing';
import { RealtimeWebsocketService } from './realtime-websocket.service';

describe('RealtimeWebsocketService', () => {
  let service: RealtimeWebsocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealtimeWebsocketService],
    }).compile();

    service = module.get<RealtimeWebsocketService>(RealtimeWebsocketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
