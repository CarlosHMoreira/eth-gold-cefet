import { Injectable } from '@angular/core';

import { Web3Service } from './web3.service';
import { Transfer } from './../models/transfer';
import GOLDCOIN_ARTIFACTS from '../../../../build/contracts/GoldCoin.json';

@Injectable({
  providedIn: 'root'
})
export class GoldCoinService {

  private deployedContract;

  constructor(private web3Service: Web3Service) {
    this.web3Service.artifactsToContract(GOLDCOIN_ARTIFACTS)
      .then(goldCoinAbstraction => goldCoinAbstraction.deployed())
      .then(deployedContract => this.deployedContract = deployedContract)
      .then( () => {
        if (!this.deployedContract) {
           throw new Error('GoldCoin is not loaded, unable to send transaction');
        }
      });
  }

  sendCoin(transfer: Transfer) {
    console.log(`Sending ${transfer.amount} coins to ${transfer.receiver}`);
    console.log('Initiating transaction... (please wait)');
    return this.deployedContract.sendCoin
      .sendTransaction(transfer.receiver, transfer.amount, {from: transfer.sender});
  }

  depositCoin(deposit: Transfer) {
    console.log(`Depositing ${deposit.amount} coins to ${deposit.receiver}`);
    console.log('Initiating transaction... (please wait)');
    return this.deployedContract.depositGold
      .sendTransaction(deposit.receiver, deposit.amount, {from: this.web3Service.accounts[0]});
  }

  getBalance(address: string) {
    console.log(`Consulting balance of ${address}`);
    console.log('Initiating transaction... (This is faster)');
    return this.deployedContract.getBalance
      .call(address);
  }

}
