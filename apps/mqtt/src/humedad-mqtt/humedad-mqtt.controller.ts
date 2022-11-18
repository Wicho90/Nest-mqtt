import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { HumedadMqttService } from './humedad-mqtt.service';

@Controller()
export class HumedadMqttController {
  constructor(private readonly humedadMqttService: HumedadMqttService) {}

  
  @MessagePattern('humedad-input')
  create(@Payload() payload: number, @Ctx() context: MqttContext) {
    this.humedadMqttService.create(payload);
    console.log('Insercion hecha');
  }

  // @MessagePattern('createHumedadMqtt')
  // create(@Payload() createHumedadMqttDto: CreateHumedadMqttDto) {
  //   return this.humedadMqttService.create(createHumedadMqttDto);
  // }
}
