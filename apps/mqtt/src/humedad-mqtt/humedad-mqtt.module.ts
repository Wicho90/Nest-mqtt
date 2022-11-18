import { Module } from '@nestjs/common';
import { HumedadMqttService } from './humedad-mqtt.service';
import { HumedadMqttController } from './humedad-mqtt.controller';
import { MessagesWsModule } from 'apps/servidor/src/messages-ws/messages-ws.module';

@Module({
  controllers: [HumedadMqttController],
  providers: [HumedadMqttService],
  imports: [ MessagesWsModule ]
})
export class HumedadMqttModule {}
