import { Component, OnInit } from '@angular/core';

import { Usuario } from "../interfaces/usuario/usuario";

@Component({
  selector: 'app-app-autenticacao',
  templateUrl: './app-autenticacao.component.html',
  styleUrls: ['./app-autenticacao.component.css']
})
export class AppAutenticacaoComponent{

  usuario: Usuario = {
    userId: "",
    password: "",
    tipo: ""
  }
  classe = {
    'color' : ""
  }
  msn?:string = "";
  user: string = "XPTO-21";
  senha: string = "Trocar@123";
  contador:number = 0;
  spinner: boolean = false;
  
  login():void {

    this.spinner = true;
    
    setTimeout(() => {

      this.spinner = false;

    }, 1000);

    if (this.contador >= 3){

      this.classe.color = "text-danger";
      this.msn = "Usuário Bloqueado!";

    } else if (this.usuario.userId != this.user) {

      this.classe.color = "text-danger";
      this.msn = "Acesso negado, usuário incorreto";

    } else if (this.usuario.password != this.senha) {

      this.classe.color = "text-danger";
      this.msn = "Acesso negado, senha incorreta";
      this.contador = this.contador + 1;

    } else if (this.usuario.userId == this.user && this.usuario.password == this.senha) {

      this.classe.color = "text-success";
      this.msn = "Logado!";
      this.contador = 0;

    }
  }
}
