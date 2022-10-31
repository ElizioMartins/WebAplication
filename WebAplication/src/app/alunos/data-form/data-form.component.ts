import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidatorService } from 'src/app/erro-form-control/validator.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit{

  formulario = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private validator: ValidatorService, private http: HttpClient) {}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });
  }

  onSubmit(){

    console.log(this.formulario.value);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(
        (dados) => {
          console.log(dados);

          this.formulario.reset();
        },
        (erro: any) => alert('erro')
      );

  }
}
