import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance/balance.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [BalanceComponent],
  exports: [BalanceComponent]
})
export class BalancesModule { }
