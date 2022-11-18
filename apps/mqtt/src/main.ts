import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MqttModule } from './mqtt.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MqttModule,
    {
      transport: Transport.MQTT,
      options: {
        subscribeOptions: { qos: 1 },
        url: 'mqtt://test.mosquitto.org:1883',
      },
    });

  app.listen();
}
bootstrap();
