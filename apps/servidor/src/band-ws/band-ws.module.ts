import { Module } from '@nestjs/common';
import { BandWsService } from './band-ws.service';
import { BandWsGateway } from './band-ws.gateway';

@Module({
  providers: [BandWsGateway, BandWsService]
})
export class BandWsModule {}
