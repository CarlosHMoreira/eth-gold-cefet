import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'cft-display-status',
  templateUrl: './display-status.component.html',
  styleUrls: ['./display-status.component.css']
})
export class DisplayStatusComponent implements OnInit {

  private again = true;
  connected = false;
  title = 'You are not connected yet!';
  description = 'Check your Metamask account or your network connection.';

  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
    this.startSimulatedWebSocket();
    this.tryToConnect();
  }

  private tryToConnect() {
    this.web3Service.accountsObservable.subscribe(
      accounts => {
        if (accounts.length) {
          this.setConnectedMessages();
          this.connected = true;
        } else {
          this.setUnconnectedMessage();
          this.connected = false;
        }
      }
    );
  }

  private startSimulatedWebSocket() {
    if (this.again) {
      this.web3Service.refreshAccounts();
      this.again = false;
      this.startSimulatedWebSocket();
      setTimeout(() => {
        this.again = true;
      }, 3000);
    }
  }

  private setConnectedMessages() {
    this.title = 'You are connected!';
    this.description = 'Application running...';
  }

  private setUnconnectedMessage() {
    this.title = 'You are not connected yet!';
    this.description = 'Check your Metamask account or your network connection.';
  }

}
