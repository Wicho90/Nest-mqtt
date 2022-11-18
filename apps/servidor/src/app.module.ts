import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from "@nestjs/schedule";


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesWsModule } from './messages-ws/messages-ws.module';
import { BandWsModule } from './band-ws/band-ws.module';
import { HumedadWsModule } from './humedad-ws/humedad-ws.module';
import { LuzWsModule } from './luz-ws/luz-ws.module';

@Module({
 
  imports: [
    MessagesWsModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    ScheduleModule.forRoot(),
    BandWsModule,
    HumedadWsModule,
    LuzWsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
