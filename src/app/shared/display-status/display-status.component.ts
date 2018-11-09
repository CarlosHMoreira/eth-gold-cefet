import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'cft-display-status',
  templateUrl: './display-status.component.html',
  styleUrls: ['./display-status.component.css']
})
export class DisplayStatusComponent implements OnInit {

  connected = false;
  title = 'You are not connected yet!';
  description = 'Check out your Metamask account or your network connection.';

  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
    this.tryToConnect();
  }

  private tryToConnect() {
    this.web3Service.accountsObservable.subscribe(
      accounts => {
         if (accounts.length) {
           this.connected = true;
           this.title = 'You are connected!';
           this.description = 'Application running...';
         }
      }
    );
  }

}
