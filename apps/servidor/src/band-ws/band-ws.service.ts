import { Injectable } from '@nestjs/common';
import { CreateBandWDto } from './dto/create-band-w.dto';
import { UpdateBandWDto } from './dto/update-band-w.dto';
import { Band } from './entities/band';
import { Bandlist } from './entities/BandList';

@Injectable()
export class BandWsService {
  
  private bands: Band[] = Bandlist;

  create( name: string) {

    const newBand = new Band( name );
    this.bands.push( newBand );
    return this.bands;
  }

  findAll() {
    return this.bands;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} bandW`;
  // }

  // update(id: number, updateBandWDto: UpdateBandWDto) {
  //   return `This action updates a #${id} bandW`;
  // }

  remove(id: string) {
    this.bands = this.bands.filter( band => band.id !== id);
    return 
  }

  increseVotes( id: string ) {
    this.bands = this.bands.map( band => {
     
      if (band.id === id) {
        band.votes++;
      }

      return band
      
    });

  }

  changeName( {id, name} ) {

    this.bands = this.bands.map( band => {
     
      if (band.id === id) {
        band.name = name;
      }

      return band

    });

  }
}
