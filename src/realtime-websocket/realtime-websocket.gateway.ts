import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class RealtimeWebsocketGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() payload: any, @ConnectedSocket() client: Socket) {
    const text = typeof payload?.text === 'string' ? payload.text.trim().toLowerCase() : '';

    if (text === 'ping') {
      this.server.emit('message', { text: 'pong' });
      console.log(payload);
    }

    if (text === 'pong') {
      this.server.emit('message', { text: 'ping' });
      console.log(payload);
    }

    return { status: 'ignored' };
  }
}
