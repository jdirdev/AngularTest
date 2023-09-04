import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import * as socketIO from 'socket.io-client';


@Injectable()
export class SocketService {

    UrlExpress:string = 'http://localhost:3000'; 

    private client: socketIO.Socket;

    constructor(private httpClient:HttpClient) {
      this.client = socketIO.connect(this.UrlExpress);
    }

    connectToServer(topic: string) : Observable<any> {
      return new Observable((subscribe) => {
        this.client.on(topic, (data: any) => {
          subscribe.next(data);
        });
      });
    }

    emitToServer(topic: string, data: string) {
      this.client.emit(topic, data);
    }

    





}