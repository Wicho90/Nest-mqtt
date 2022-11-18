import { Module } from '@nestjs/common';
import { HumedadWsService } from './humedad-ws.service';
import { HumedadWsGateway } from './humedad-ws.gateway';
import { MessagesWsModule } from '../messages-ws/messages-ws.module';

@Module({
  providers: [HumedadWsGateway, HumedadWsService],
  imports: [ MessagesWsModule ]
})
export class HumedadWsModule {}
