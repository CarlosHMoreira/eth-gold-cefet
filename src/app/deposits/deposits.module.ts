import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { DepositComponent } from './deposit/deposit.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [DepositComponent],
  exports: [DepositComponent]
})
export class DepositsModule { }
