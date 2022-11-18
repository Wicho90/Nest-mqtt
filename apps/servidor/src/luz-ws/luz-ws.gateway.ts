import { Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { LuzWsService } from './luz-ws.service';


@WebSocketGateway()
export class LuzWsGateway {
  constructor(private readonly luzWsService: LuzWsService) {}
  
  @WebSocketServer() wss: Server;
  
  private readonly logger =  new Logger(LuzWsService.name);
  
  

 


  @SubscribeMessage('findAllLuzs')
  async findAll() {
    this.sendAll();
  }

  async sendAll() {
    const luzs = await this.luzWsService.findAll();
    this.wss.emit('luzs-from-server', luzs);
  }


  @Cron(CronExpression.EVERY_5_SECONDS)
  sendAllLuzCrono() {
      this.logger.debug('Mandando data');
      this.sendAll();
  }




  // @SubscribeMessage('findOneLuzW')
  // findOne(@MessageBody() id: number) {
  //   return this.luzWsService.findOne(id);
  // }
  

  
}
