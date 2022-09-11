import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"; 

import { HomeComponent } from "src/app/pages/home/home.component";
import { AppAutenticacaoComponent } from "src/app/app-autenticacao/app-autenticacao.component";
import { ContatoComponent } from "src/app/pages/contato/contato.component";
import { Error404Component } from "src/app/pages/error404/error404.component";
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AppAutenticacaoComponent}, 
  {path: 'contato', component: ContatoComponent, canActivate: [AuthGuard]}, 
  {path: '**', component: Error404Component}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }