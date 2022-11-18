import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.MQTT,
  //     options: {
  //       subscribeOptions: { qos: 1 },
  //       url: 'mqtt://test.mosquitto.org:1883',
  //     },
  //   });
  
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   })
  //   );
  

  // app.listen();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
