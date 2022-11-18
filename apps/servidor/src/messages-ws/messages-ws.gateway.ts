import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';
import { MessagesWsService } from './messages-ws.service';
import { Cron, CronExpression } from "@nestjs/schedule";
import { Logger } from '@nestjs/common';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway  {
                                // implements OnGatewayConnection, OnGatewayDisconnect
  @WebSocketServer() wss: Server;

  
  constructor(private readonly messagesWsService: MessagesWsService) {}


  // handleConnection(client: Socket) {
  //   // console.log('Cliente conectado', client.id);
  //   this.messagesWsService.registerClient( client );

  //   this.wss.emit('clients-updated', this.messagesWsService.getConnectedClients() );

  //   this.sendData();
  // }

  // handleDisconnect(client: Socket) {
  //   // console.log('Cliente desconectado', client.id);

  //   this.messagesWsService.removeClient( client.id );

  //   this.wss.emit('clients-updated', this.messagesWsService.getConnectedClients() );
  // }

  @SubscribeMessage('luz-from-client')
  onMessageFromClient( client: Socket, payload: NewMessageDto ) {
    this.sendData();

  }

  async sendData() {
    const {error, dato} = await this.messagesWsService.consultar();

    this.wss.emit('luz-from-server', {
      error,
      message: dato || 'No hay datos!!!'
    });
  }

  // @Cron(CronExpression.EVERY_2ND_MONTH)
  // sendDataCrono() {
  //     // this.logger.debug('Mandando data');

  //     this.sendData();
  // }
  






  // @SubscribeMessage('message-from-client')
  // onMessageFromClient( client: Socket, payload: NewMessageDto ) {
  //   // console.log(client.id, payload);

  //   //! Emite unicamente al propio cliente
  //   // client.emit('message-from-server', {
  //   //   fullName: 'Soy yo',
  //   //   message: payload.message || 'no-message!!!'
  //   // });
    

  //   //! Emite a todos Menos al cliente original
  //   // client.broadcast.emit('message-from-server', {
  //   //   fullName: 'Soy yo',
  //   //   message: payload.message || 'no-message!!!'
  //   // });

  //   //! Emite a todos incluyendo al cliente original
  //   this.wss.emit('message-from-server', {
  //       fullName: 'Soy yo',
  //       message: payload.message || 'no-message!!!'
  //     });
  // }

}
