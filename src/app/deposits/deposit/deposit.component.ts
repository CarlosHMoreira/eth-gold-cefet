import { Transfer } from './../../shared/models/transfer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoldCoinService } from '../../shared/services/gold-coin.service';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'cft-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private goldCoinService: GoldCoinService
    ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.depositForm = this.formBuilder.group({
      amount: [0, [Validators.min(1), Validators.required]],
      receiver: ['', Validators.required]
    });
  }

  depositGold() {
    this.depositForm.disable();

    const deposit = this.depositForm.getRawValue() as Transfer;

    this.goldCoinService
      .depositCoin(deposit)
      .catch(error => {
        this.snackbarService.message('Transaction failed!');
        this.depositForm.enable();
        throw new Error(error);
      })
      .then(transaction => {
        this.depositForm.reset();
        this.depositForm.enable();
        this.snackbarService.message(`Transaction successfull, ${transaction}`);
      });
  }

}
