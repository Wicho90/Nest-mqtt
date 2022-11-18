import { Module } from '@nestjs/common';
import { LuzWsService } from './luz-ws.service';
import { LuzWsGateway } from './luz-ws.gateway';
import { MessagesWsModule } from '../messages-ws/messages-ws.module';

@Module({
  providers: [LuzWsGateway, LuzWsService],
  imports: [ MessagesWsModule ]
})
export class LuzWsModule {}
