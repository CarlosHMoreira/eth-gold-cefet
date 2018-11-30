import { Transfer } from './../models/transfer';
import { Web3Service } from './web3.service';
import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
import GOLDCOIN_ARTIFACTS from '../../../../build/contracts/MetaCoin.json';

// declare let require: any;
// const GOLDCOIN_ARTIFACTS = require('../../../../build/contracts/MetaCoin.json');

@Injectable({
  providedIn: 'root'
})
export class GoldCoinService {

  goldCoinContract;

  constructor(private web3Service: Web3Service) {
    this.web3Service.artifactsToContract(GOLDCOIN_ARTIFACTS)
      .then(goldCoinAbstraction => this.goldCoinContract = goldCoinAbstraction);
  }

  async sendCoin(transfer: Transfer) {
    if (!this.goldCoinContract) {
      throw new Error('GoldCoin is not loaded, unable to send transaction');
    }
    console.log(`Sending ${transfer.amount} coins to ${transfer.receiver}`);
    console.log('Initiating transaction... (please wait)');
        const deployedGoldCoinContract = await this.goldCoinContract.deployed();
        return deployedGoldCoinContract.sendCoin
                    .sendTransaction(transfer.receiver, transfer.amount, {from: transfer.sender})
                    .then(transaction => console.log(`Transaction finished: ${transaction}`));
  }
}
