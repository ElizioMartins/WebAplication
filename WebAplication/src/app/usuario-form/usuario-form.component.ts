import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarioForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
  });


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {


  }

  onSubmit(){

  }

}
