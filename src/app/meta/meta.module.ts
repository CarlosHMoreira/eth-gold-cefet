import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetaSenderComponent} from './meta-sender/meta-sender.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule, MatSnackBarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    RouterModule,
    SharedModule
  ],
  declarations: [MetaSenderComponent],
  exports: [MetaSenderComponent]
})
export class MetaModule {
}
