import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Humedad } from 'apps/servidor/src/humedad-ws/entities/humedad.entity';
import { Model } from "mongoose";
import { Luz } from '../../servidor/src/luz-ws/entities/luz.entity';

@Injectable()
export class MqttService {}
