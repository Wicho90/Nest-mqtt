import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Humedad } from 'apps/servidor/src/humedad-ws/entities/humedad.entity';
import { Model } from 'mongoose';

@Injectable()
export class HumedadMqttService {
  
  constructor(
    @InjectModel( Humedad.name )
    private readonly humedadModel: Model<Humedad>

  ) {}

  async create(nivel: number) {

    const estado = this.validarHumedad(nivel);

    const createAt = new Date().getTime();

    const humedad = await this.humedadModel.create( {nivel, estado, createAt});

    return humedad;

  }

  // create(createHumedadMqttDto: CreateHumedadMqttDto) {
  //   return 'This action adds a new humedadMqtt';
  // }


  validarHumedad(nivel: number) {
    if ( nivel < 250 ) {
      return 'bajo';
    }

    if ( nivel > 500) {
      return 'alto';
    }

    return 'normal';
  }
  
  
  
  

  // findAll() {
  //   return `This action returns all humedadMqtt`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} humedadMqtt`;
  // }

  // update(id: number, updateHumedadMqttDto: UpdateHumedadMqttDto) {
  //   return `This action updates a #${id} humedadMqtt`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} humedadMqtt`;
  // }
}
