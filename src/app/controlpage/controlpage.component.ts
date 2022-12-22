import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';
import { SignalrService } from '../services/signalr.service';

@Component({
  selector: 'app-controlpage',
  templateUrl: './controlpage.component.html',
  styleUrls: ['./controlpage.component.css']
})
export class ControlpageComponent implements OnInit {

  constructor(private signalrService: SignalrService) {}

  public model = { username:""};
  public action = {user:"", state:"", time:""};  
  public currentstate = "";
  public togglestate = "";
  
  async ngOnInit():  Promise<void> {


    fetch ('http://localhost:5071/api/State', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });


    this.signalrService.connection.on("Locktoggled", (user: string, state: string, time: string) => { 
      this.action = { user, state, time };
      console.log(this.action);
    });


    this.signalrService.connection.on("TransferState", (state: string) => { 
      console.log("currentstate: " + state);
      this.currentstate = state;
    });


    localforage.config({
      name: 'opdracht4',
      storeName: 'userinfo',
      description: 'Gebruikersnaam'
    });
    this.model.username = await localforage.getItem('username')||"";
  }

  public async onSubmit() { 
    console.log(this.model) 
    localforage.setItem('username', this.model.username);

    if (this.currentstate == "lock") {
      this.togglestate = "unlock";
    }
    else if (this.currentstate == "lock_open") {
      this.togglestate = "lock";
    }

    fetch ('http://localhost:5071/api/Log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: this.model.username,
        action: this.togglestate,
        timestamp: new Date()
      }),
    });
  }
}
