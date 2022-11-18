import { Module } from '@nestjs/common';
import { MessagesWsService } from './messages-ws.service';

import { MessagesWsGateway } from './messages-ws.gateway';
import { MqttModule } from 'apps/mqtt/src/mqtt.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Luz, LuzSchema } from 'apps/servidor/src/luz-ws/entities/luz.entity';
import { Humedad, HumedadSchema } from '../humedad-ws/entities/humedad.entity';

@Module({
  providers: [MessagesWsGateway, MessagesWsService,],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    MongooseModule.forFeature([
      {
        name: Luz.name,
        schema: LuzSchema
        },
      {
        name: Humedad.name,
        schema: HumedadSchema
      }
    ]),
  ],
  exports: [
    MessagesWsGateway,
    MongooseModule
  ]
})
export class MessagesWsModule {}
