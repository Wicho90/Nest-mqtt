import { PartialType } from '@nestjs/mapped-types';
import { CreateLuzWDto } from './create-luz-w.dto';

export class UpdateLuzWDto extends PartialType(CreateLuzWDto) {
  id: number;
}
