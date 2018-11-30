import { Injectable } from '@angular/core';

import { Web3Service } from './web3.service';
import { Transfer } from './../models/transfer';
import GOLDCOIN_ARTIFACTS from '../../../../build/contracts/GoldCoin.json';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoldCoinService {

  private goldCoinAbstraction;

  constructor(private web3Service: Web3Service) {
    this.extractContractAbstraction();
  }

  private extractContractAbstraction() {
    this.web3Service.artifactsToContract(GOLDCOIN_ARTIFACTS)
      .then(goldCoinAbstraction => this.goldCoinAbstraction = goldCoinAbstraction);
  }

  sendCoin(transfer: Transfer) {
    console.log(`Sending ${transfer.amount} coins to ${transfer.receiver}`);
    console.log('Initiating transaction... (please wait)');
    return this.goldCoinAbstraction
      .deployed()
      .sendCoin
        .sendTransaction(transfer.receiver, transfer.amount, {from: transfer.sender});
  }

  depositCoin(deposit: Transfer) {

    console.log(`Depositing ${deposit.amount} coins to ${deposit.receiver}`);
    console.log('Initiating transaction... (please wait)');

    return this.goldCoinAbstraction
      .deployed()
      .depositGold
        .sendTransaction(deposit.receiver, deposit.amount, {from: this.web3Service.accounts[0]});
  }

  getBalance(address: string) {
    return this.goldCoinAbstraction.deployed()
      .then(instance => instance.getBalance.call(address));
  }
}
