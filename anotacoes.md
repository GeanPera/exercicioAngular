# ANGULAR

# **Comandos:**

## Instalar angular
~~~
npm install -g @angular/cli
~~~
## Criar um projeto
~~~
ng new (nome do projeto)
~~~
## Rodar projeto
~~~
ng serve
~~~
## Gerar um compomente
~~~
ng g c (nome do componente)
~~~
## Instalar o bootstrap 
~~~
npm i bootstrap
~~~

# **Comunicação:**

## Angular Expression
O valor que estiver no component.js é o que vai aparecer

**Exemplo:**

No component.js:
~~~
titulo: String = 'Hello World';
~~~
No component.html:
~~~
<h1>{{ titulo }}</h1>
~~~

## One way Data Binding
Componente -----> Template 

**Exemplo:**

No component.js:
~~~
src: '',
alt: ''
~~~
No component.html:
~~~
<img [src]="url" [alt]="alt">
~~~

## Event Binding

**Exemplo:**

No component.js:
~~~
cliqueBotao(){
    
}
~~~

No component.html:
~~~
<button (click)="cliqueBotao()" class="btn btn-primary">Clique Aqui!</button>
~~~

## Two Way Data Binding

Componente <-----> Template

No app.modules.ts:
~~~
import { FormsModule } from '@angular/forms';
...
imports: [
    BrowserModule, 
    FormsModule  <----
],...
~~~

**Exemplo:**

No component.js:
~~~
cidade: string = "Blumenau";
~~~

No component.html:
~~~
<input type="text"  [(ngModel)]="cidade">
~~~


# **Bootstrap**

## Editar o arquivo angular.json 

 ~~~
      "build": {
         "styles": [
              "src/styles.css", 
              "./node_modules/bootstrap/dist/css/bootstrap.min.css" <-----------
 ~~~

# **Diretivas**


## ngIf

~~~
   <h1 *ngIf="cidade === 'BNU'">Cidade: Blumenau</h1>
~~~


## ngSwich

Instancia um template, em uma lista de escolhas, dependendo do valor obtido pela expressão.


## ngStyle

Serve para aplicar um estilo inline com parametros dinâmicos. 


# **LifeCycle Hooks**

São métodos especiais que são disparados automáticamente quando determinados eventos acontecem. 

**Os métodos são:** 

**ngOnChanges:** chamado uma vez na criação do componente e sempre que houver alteração em uma de suas propriedades de entrada. Ou seja, mudanças no Input() decorator e no property binding.

**ngOnInit:** chamado uma única vez quando o componente é inicializado (logo após o primeiro ngOnChanges).

**ngDoCheck:** chamado a cada ciclo de detecção de alterações (processo que percorre o componente atrás de mudanças). Portanto use ao invés do ngOnChanges para alterações que o Angular não detecta.

**ngOnDestroy:** chamado antes do Angular destruir o componente.
* Exemplos de Uso:* para ações de limpeza ou para deslogar o usuário antes de deixar o componente. 


Além disso existem outros 4 ganchos dentro do **ngDoCheck:**

**ngAfterContentInit:** chamado depois que o conteúdo externo é inserido no componente (por exemplo, vindo do ng-content).

**ngAfterContentChecked:** invocado após a verificação do conteúdo externo.

**ngAfterViewInit:** chamado logo após o conteúdo do próprio componente e de seus filhos ser inicializado.

**ngAfterViewChecked:** chamado cada vez que o conteúdo do componente é verificado pelo mecanismo de detecção de alterações do Angular.

1. Implementar a interface do respectivo gancho;
2. E criar o método especial com seu nome.


# **Angular Router**

Roteamento entre páginas do aplicativo.  

Quando criar o projeto angular dizer "yes" para a pergunta do routing, se não:

Criar o arquivo app-routing.module.ts na pasta app

~~~
    ng generate module app-routing --flat --module=app
~~~

No app-routing.module.ts:
~~~
    import { NgModule } from "@angular/core";
    import { RouterModule, Routes } from "@angular/router"; 
~~~

Adicionar a variavel routes como mapeamento das rotas. 

~~~
    const routes: Routes = [
        {path: '', component: EnderecoComponent}, 
        {path: 'fotos', component: NgforComponent}
    ]
~~~

Adicionar a classe AppRoutingModule com a anotation @NgModule.

~~~
    @NgModule({
        declarations: [], 
        imports: [RouterModule.forRoot(routes)], 
        exports: [RouterModule]
    })
    export class AppRoutingModule {}
~~~

No app.module.ts:

~~~
  import { AppRoutingModule } from './app-routing.module';
  ...
  imports: [
    BrowserModule, 
    FormsModule,
    PhotosModule, 
    HttpClientModule,
    AppRoutingModule <-------------------------
  ],
~~~

No app-component.html:

Adicionar o router-outlet
Criar as rotas usando routerLink. 
**Exemplo:**

~~~
    <p>Header</p>
    <nav>
        <a routerLink="/">Home</a>  <---------------------------
        <a routerLink="/fotos">Fotos</a>
    </nav>
    <router-outlet></router-outlet>   <-------------------------
    <p>Footer</p>
~~~


### **Rota 404** 

Crie uma página de erro 404 


No app-routing.module.ts:

~~~
    path: '**', component: Error404Component
~~~


### **Guarda de Rotas** 

Crie um arquivo auth.guard.ts no src/app/services/auth/auth.guard.ts 

No auth.guard.ts:
~~~
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (localStorage['token'] == "um token qualquer") {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
~~~

No app-routing.module.ts:

~~~
    import { AuthGuard } from './services/auth/auth.guard';
~~~

canActivate para proteger as rotas: 

~~~
    {path: '', component: EnderecoComponent, canActivate: [AuthGuard]}, 
~~~

No app.module.ts:

~~~
    imports: [
    BrowserModule,
    FormsModule,
    ExemplosModule,
    PhotosModule, 
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [AuthGuard],  <---------------
  bootstrap: [AppComponent]
~~~

Crie seu componente de Login para alterar o conteúdo do token em localStorage e redirecione para a rota desejada. 

~~~
Componente Login: 

    logar(): void{
      localStorage['token'] = 'ptoh26410x5=50x';
      this.router.navigate(['/fotos']);
    }
    
~~~


# **Validação de Formulário** 

No app.module.ts:

~~~
import { ReactiveFormsModule } from '@angular/forms';  <--------------------

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule <--------------------------
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
~~~


No component.js:

~~~
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      userId: [''],
      password: [''],
      tipo: ['']
    });
  }
}
~~~

No component.html: 

~~~
<input id="userid" type="text" formControlName="userid" >
<input id="password" type="text" formControlName="password" >
<input id="tipo" type="email" formControlName="tipo" >
~~~


No component.ts:

~~~
  import { Validators } from '@angular/forms';
~~~

~~~
ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      username: ['',  [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
}

~~~

Para apresentar uma menssagem quando algo estiver faltando:

Abaixo no input
~~~
<div *ngIf="formulario.get('nome')?.errors?.['required'] && formulario.get('nome')?.touched>
    Nome obrigatório
</div>
~~~