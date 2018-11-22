import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material';

import { Web3Service } from '../../shared/services/web3.service';

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
    ) { }

  ngOnInit() {

    this.buildForm();
  }

  private buildForm() {
    this.transferForm = this.formBuilder.group({
      from: [null, Validators.required],
      amount: [0, Validators.min(1)],
      to: ['', Validators.required]
    });
  }

  transferGold() {

  }

}
