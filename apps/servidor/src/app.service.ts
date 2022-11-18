import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MqttRecordBuilder } from '@nestjs/microservices';

@Injectable()
export class AppService {
  
  // constructor(
  //   @Inject('MATH_SERVICE') private client: ClientProxy
  // ) {}

  // summDataService(payload: number[]) {
  //   const response = payload.reduce((a, b) => a+b , 0);

  //   const record = new MqttRecordBuilder(`${response}`)
  //     .setQoS(1)
  //     .build();

  //     this.client.send('ftf-output', record).subscribe(res => {
  //       console.log('response out: <', res, '>');
        
  //     });
  // }


  // luzService(payload: number) {
   

  //   const record = new MqttRecordBuilder(`${payload}`)
  //     .setQoS(1)
  //     .build();

  //     this.client.send('luz-out', record).subscribe(res => {
  //       console.log('response out: <', res, '>');
        
  //     });
  // }


}
