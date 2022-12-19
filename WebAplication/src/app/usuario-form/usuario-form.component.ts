import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.usuarioForm.value);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.usuarioForm.value))
      .subscribe(
        (dados) => {
          console.log(dados);

          this.resetar();
        },
        (erro: any) => alert('erro')
      );
  }
  resetar() {
    this.usuarioForm.reset();
  }
}
