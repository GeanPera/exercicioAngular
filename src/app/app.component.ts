import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "angularProject";

  textoSalvo: string = "";
  cliqueBtEnviar(campoInput: string) {
    this.textoSalvo = campoInput

  }
  readLocalStorageToken(){
    if (localStorage['token'] === "ptoh26410x5=50x") {
      return true
    } else {
      return false
    }
  }
  deslogar(){
    localStorage['token'] = "deslogado";
    console.log("deslogado")
    
  }
}

