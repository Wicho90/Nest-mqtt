import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { LuzMqttService } from './luz-mqtt.service';

@Controller()
export class LuzMqttController {
  constructor(private readonly luzMqttService: LuzMqttService) {}

  @MessagePattern('luz-input')
  create(@Payload() payload: number, @Ctx() context: MqttContext) {
    this.luzMqttService.create(payload);
    console.log('Insercion hecha'); 
  }
}
