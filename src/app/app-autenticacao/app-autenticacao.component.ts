import { Component, OnInit } from '@angular/core';

import { Usuario } from "../interfaces/usuario/usuario";
import { UsuarioService } from "../services/usuario.service"
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
  user: string = "";
  senha: string = "";
  contador:number = 0;
  spinner: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  getUsuario(){
    this.usuarioService.getUsuario().subscribe(usuario => {
      [this.usuario] = usuario;
      console.log(this.usuario);
      this.login()
    }); 
    
  }
  
  login() {
    
    this.spinner = true;
    
    setTimeout(() => {

      this.spinner = false;

    }, 1000);

    if (this.contador >= 2){

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
