import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Luz } from 'apps/servidor/src/luz-ws/entities/luz.entity';
import { Model } from "mongoose";
import { Socket } from 'socket.io';

interface ConnectedClients {
    [id: string]: Socket
}

@Injectable()
export class MessagesWsService {

    constructor(
        @InjectModel( Luz.name )
        private readonly luzModel: Model<Luz>,
    ) {}
    

    private connectedClients: ConnectedClients = {};

    registerClient( client: Socket ) {
        this.connectedClients[client.id] = client;
    }

    removeClient( clientId: string ) {
        delete this.connectedClients[clientId]; 
    }

    getConnectedClients(): string[] {
        return Object.keys( this.connectedClients );
    }

    async create(dato: number) {
        let error = '';
    
        if (dato < 0 || dato > 399 ) error = 'Dato incorrecto';  
    
    
        const luz = await this.luzModel.create({dato, error});
    
        return luz;
    
    }
    
    async consultar() {
        const ultimo = await this.luzModel.find().sort({$natural:-1}).limit(1);
        

        return ultimo[0];
     
    }


   
    

}
