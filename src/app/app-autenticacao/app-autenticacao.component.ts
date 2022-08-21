import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-autenticacao',
  templateUrl: './app-autenticacao.component.html',
  styleUrls: ['./app-autenticacao.component.css']
})
export class AppAutenticacaoComponent implements OnInit {

  msn:string = "";
  email: string = "";
  password: string = "";
  emailCadastrado: string = "XPTO-21";
  passwordCadastrado: string = "Trocar@123";
  color: string = "black";
  contador:number = 0
  

  
  constructor() { }

  ngOnInit(): void {
  }

  login():void {
    if (this.contador >= 3){
      this.color = "red"
      this.msn = "Usuário Bloqueado!"
    } else if (this.email != this.emailCadastrado) {
      this.color = "red"
      this.msn = "Acesso negado, usuário incorreto"
    } else if (this.password != this.passwordCadastrado) {
      this.color = "red"
      this.msn = "Acesso negado, senha incorreta"
      this.contador = this.contador + 1
    } else if (this.email == this.emailCadastrado && this.password == this.passwordCadastrado) {
      this.color = "green"
      this.msn = "Logado!"
      this.contador = 0
    }
  }
}
