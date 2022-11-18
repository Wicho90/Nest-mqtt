import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { MessagesWsGateway } from 'apps/servidor/src/messages-ws/messages-ws.gateway';
import { MessagesWsModule } from 'apps/servidor/src/messages-ws/messages-ws.module';
import { MqttService } from './mqtt.service';

@Controller()
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}
}
