import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup; 
  
    constructor(private formBuilder: FormBuilder) { 
      this.formulario = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.pattern('[A-Z]*')]],
        telefone: [''],
        email: ['', [Validators.required, Validators.email] ],
        cep: ['', [Validators.pattern('[0-9]{8}')]],
        assunto: ['', [Validators.required, Validators.maxLength(50)]],
        menssagem: ['', [Validators.required, Validators.maxLength(500)]]
      });
    }
  
    ngOnInit(): void {
  
    }
  
    cadastrar(): void{
      console.log(this.formulario.get('nome')?.value);
      console.log(this.formulario.get('telefone')?.value);
      console.log(this.formulario.get('email')?.value);
      console.log(this.formulario.get('cep')?.value);
      console.log(this.formulario.get('assunto')?.value);
      console.log(this.formulario.get('menssagem')?.value);
    }

}
