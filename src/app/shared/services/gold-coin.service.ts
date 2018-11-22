import { Transfer } from './../models/transfer';
import { Web3Service } from './web3.service';
import { Injectable } from '@angular/core';

const GOLDCOIN_ARTIFACTS = require('../../../../build/contracts/MetaCoin.json');

@Injectable({
  providedIn: 'root'
})
export class GoldCoinService {

  goldCoinContract;

  constructor(private web3Service: Web3Service) {
    this.web3Service.artifactsToContract(GOLDCOIN_ARTIFACTS)
      .then(goldCoinAbstraction => this.goldCoinContract = goldCoinAbstraction);
  }

  sendCoin(transfer: Transfer) {
    if (!this.goldCoinContract) {
      throw new Error('Metacoin is not loaded, unable to send transaction');
    }

    console.log(`Sending ${transfer.amount} coins to ${transfer.receiver}`);
    console.log('Initiating transaction... (please wait)');

    try {
      const deployedMetaCoin = await this.MetaCoin.deployed();
      const transaction = await deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }


}
