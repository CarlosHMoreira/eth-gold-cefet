import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutesModule } from './routing/app.routing.module';
import { MetaModule } from './meta/meta.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TransferModule } from './transfer/transfer.module';
import { DepositsModule } from './deposits/deposits.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    TransferModule,
    MetaModule,
    DepositsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
