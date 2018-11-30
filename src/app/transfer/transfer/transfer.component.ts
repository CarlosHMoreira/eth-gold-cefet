import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Web3Service } from '../../shared/services/web3.service';
import { Transfer } from './../../shared/models/transfer';
import { GoldCoinService } from './../../shared/services/gold-coin.service';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'cft-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferForm: FormGroup;
  accounts = this.web3Service.accountsObservable;

  constructor(
    private formBuilder: FormBuilder,
    private web3Service: Web3Service,
    private goldCoinService: GoldCoinService,
    private snackbarService: SnackbarService
    ) { }

  ngOnInit() {

    this.buildForm();
  }

  private buildForm() {
    this.transferForm = this.formBuilder.group({
      sender: [null, Validators.required],
      amount: [0, [Validators.min(1), Validators.required]],
      receiver: ['', Validators.required]
    });
  }

  transferGold() {
    const transfer = this.transferForm.getRawValue() as Transfer;
    this.transferForm.disable();
    setTimeout(() => {
      this.goldCoinService
      .sendCoin(transfer)
      .catch(error => {
        this.snackbarService.message(`Transaction failed`);
        throw new Error(error);
      })
      .then(transaction => {
        this.transferForm.reset();
        this.transferForm.markAsPristine();
        this.transferForm.enable();
        this.snackbarService.message(`Transaction successfull: ${transaction}`);
      });
    }, 3000);
  }

}
