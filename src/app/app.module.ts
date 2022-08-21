import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppAutenticacaoComponent } from './app-autenticacao/app-autenticacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAutenticacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
