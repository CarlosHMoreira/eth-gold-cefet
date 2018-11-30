import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../shared/services/web3.service';
import { GoldCoinService } from '../../shared/services/gold-coin.service';

@Component({
  selector: 'cft-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  accounts: {address: string, amountGold: number}[] = [];

  constructor(
    private web3Service: Web3Service,
    private goldCoinService: GoldCoinService
  ) { }

  ngOnInit() {
    this.web3Service.accountsObservable.subscribe( accounts => {
      accounts.forEach( async (address, index) => {

        if (index === 0 ) { return; }

        this.goldCoinService
          .getBalance(address)
          .then(amountGold => this.accounts.push({address, amountGold}));
      });
    });
  }

}
