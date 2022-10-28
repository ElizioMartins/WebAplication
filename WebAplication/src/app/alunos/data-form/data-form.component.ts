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

  constructor(private formBuilder: FormBuilder, private validator: ValidatorService,) {}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });
  }
}
