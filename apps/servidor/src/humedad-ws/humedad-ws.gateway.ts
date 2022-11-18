import { Cron, CronExpression } from '@nestjs/schedule';
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { HumedadWsService } from './humedad-ws.service';

@WebSocketGateway()
export class HumedadWsGateway {
  constructor(private readonly humedadWsService: HumedadWsService) {}

  @WebSocketServer() wss: Server;


  @SubscribeMessage('findAllHumedads')
  async findAll() {
    this.sendAll();
  }
  

  async sendAll() {
    const humedads = await this.humedadWsService.findAll();
    this.wss.emit('humedads-from-server', humedads);
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  sendAllLuzCrono() {
      this.sendAll();
  }


}
