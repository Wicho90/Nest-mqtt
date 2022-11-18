import { Module } from '@nestjs/common';
import { LuzMqttService } from './luz-mqtt.service';
import { LuzMqttController } from './luz-mqtt.controller';
import { MessagesWsModule } from 'apps/servidor/src/messages-ws/messages-ws.module';

@Module({
  controllers: [LuzMqttController],
  providers: [LuzMqttService],
  imports: [ MessagesWsModule ]
})
export class LuzMqttModule {}
