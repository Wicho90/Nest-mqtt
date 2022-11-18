import { PartialType } from '@nestjs/mapped-types';
import { CreateHumedadDto } from './create-humedad.dto';

export class UpdateHumedadDto extends PartialType(CreateHumedadDto) {
  id: number;
}
