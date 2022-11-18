import { PartialType } from '@nestjs/mapped-types';
import { CreateBandWDto } from './create-band-w.dto';

export class UpdateBandWDto extends PartialType(CreateBandWDto) {
  id: number;
}
