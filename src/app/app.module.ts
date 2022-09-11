import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppAutenticacaoComponent } from './app-autenticacao/app-autenticacao.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { Error404Component } from './pages/error404/error404.component';
import { AppRoutingModule } from './app-routing.module';
import { RodapeComponent } from './pages/rodape/rodape.component';
import { AuthGuard } from './services/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AppAutenticacaoComponent,
    HomeComponent,
    ContatoComponent,
    Error404Component,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }
