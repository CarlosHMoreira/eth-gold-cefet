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

  constructor(web3Service: Web3Service) { }

  ngOnInit() {
  }

  tryToConnect(event) {
    console.log(event);
    this.connected = !this.connected;
  }

}
