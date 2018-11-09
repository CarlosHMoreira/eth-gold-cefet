import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DisplayStatusComponent } from './display-status/display-status.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DisplayStatusComponent],
  exports: [
    DisplayStatusComponent
  ],
  providers: [  ],
})
export class SharedModule { }
