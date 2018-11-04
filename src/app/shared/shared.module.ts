import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DisplayStatusComponent } from './display-status/display-status.component';
import { Web3Service } from './services/web3.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DisplayStatusComponent],
  exports: [
    DisplayStatusComponent
  ],
  providers: [
    Web3Service
  ],
})
export class SharedModule { }
