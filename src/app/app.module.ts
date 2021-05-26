import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyasvalueService } from './keyasvalue.service';
import { HttpClientModule } from '@angular/common/http';
import { GeneraComponent } from './genera/genera.component';
import { InserisciComponent } from './inserisci/inserisci.component';
import { TestoComponent } from './testo/testo.component';
import { TxComponent } from './tx/tx.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneraComponent,
    InserisciComponent,
    TestoComponent,
    TxComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [KeyasvalueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
