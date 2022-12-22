import { Injectable } from '@angular/core';
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor() {
    this.connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5071/loghub")
    .build();
    
    this.connection.start()
    .then(() => console.log("Connection started!"))
    .catch((err: any) => console.log("Error while starting connection: " + err))
  }
  public connection : HubConnection;
}
