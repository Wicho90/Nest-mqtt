import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHumedadDto } from './dto/create-humedad.dto';
import { UpdateHumedadDto } from './dto/update-humedad.dto';
import { Humedad } from './entities/humedad.entity';


@Injectable()
export class HumedadWsService {
  
  constructor(
    @InjectModel( Humedad.name )
    private readonly humedadModel: Model<Humedad>,
  ) {}
  
  async findAll() {
    const humedads = await this.humedadModel.find();
    return humedads;
  }

}
