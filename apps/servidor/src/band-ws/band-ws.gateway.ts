import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { BandWsService } from './band-ws.service';
import { Server, Socket } from 'socket.io';


@WebSocketGateway()
export class BandWsGateway {

  @WebSocketServer() wss: Server;

  constructor(private readonly bandWsService: BandWsService) {}



  handleConnection(client: Socket) {
    console.log('Cliente conectado');

  }



  
  @SubscribeMessage('createBand')
  create(@MessageBody() name: string) {
    this.bandWsService.create( name );
    this.wss.emit('bands-from-server', this.bandWsService.findAll());

  }

  @SubscribeMessage('findAllBands')
  findAll() {
    this.wss.emit('bands-from-server', this.bandWsService.findAll());
  }

 

  @SubscribeMessage('removeBand')
  remove(@MessageBody() id: string) {
    this.bandWsService.remove(id);
    this.wss.emit('bands-from-server', this.bandWsService.findAll()); 

  }

  @SubscribeMessage('increseVotesBand')
  increseVotes(@MessageBody() id: string) {
    this.bandWsService.increseVotes(id);
    this.wss.emit('bands-from-server', this.bandWsService.findAll()); 
  }

  @SubscribeMessage('changeName')
  changeName(@MessageBody() payload) {
    
    this.bandWsService.changeName(payload);

    this.wss.emit('bands-from-server', this.bandWsService.findAll()); 

  }

   // @SubscribeMessage('findOneBandW')
  // findOne(@MessageBody() id: number) {
  //   return this.bandWsService.findOne(id);
  // }

  // @SubscribeMessage('updateBandW')
  // update(@MessageBody() updateBandWDto: UpdateBandWDto) {
  //   return this.bandWsService.update(updateBandWDto.id, updateBandWDto);
  // }

  
}
