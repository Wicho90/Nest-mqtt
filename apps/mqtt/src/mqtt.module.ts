import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesWsGateway } from 'apps/servidor/src/messages-ws/messages-ws.gateway';
import { MessagesWsModule } from 'apps/servidor/src/messages-ws/messages-ws.module';
import { Luz, LuzSchema } from '../../servidor/src/luz-ws/entities/luz.entity';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';
import { HumedadMqttModule } from './humedad-mqtt/humedad-mqtt.module';
import { LuzMqttModule } from './luz-mqtt/luz-mqtt.module';

@Module({
  imports: [
    MessagesWsModule,
    HumedadMqttModule,
    LuzMqttModule
    
  ],
  controllers: [MqttController],
  providers: [MqttService],
})
export class MqttModule {}
