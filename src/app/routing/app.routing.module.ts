import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaSenderComponent } from '../meta/meta-sender/meta-sender.component';
import { DisplayStatusComponent } from '../shared/display-status/display-status.component';
import { TransferComponent } from '../transfer/transfer/transfer.component';
import { DepositComponent } from '../deposits/deposit/deposit.component';
import { BalanceComponent } from '../balances/balance/balance.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: DisplayStatusComponent
  },
  {
    path: 'transfer',
    component: TransferComponent
  },
  {
    path: 'deposit',
    component: DepositComponent
  },
  {
    path: 'balances',
    component: BalanceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
