import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { ValidatorService } from 'src/app/erro-form-control/validator.service';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { AlunosService } from '../alunos.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {
  aluno!: any;
  inscricao!: Subscription;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private validator: ValidatorService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(id);
      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

  verificaValidTouched(campo: any) {
    return this.validator.verificaValidTouched(campo);
  }

  aplicaCssErro(campo: any) {
    return this.validator.aplicaCssErro(campo);
  }

  consultaCEP(cep: any, form: any) {
    console.log(cep);
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != '') {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populadadosForm(dados, form));
      }



    }
  }
  populadadosForm(dados: any, formulario: any ){

    console.log(dados, formulario);
    console.log(dados.logradouro, formulario);
    formulario.form.patchValue({

      endereco:{
        rua: dados.logradouro,
        cep:dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }

    });

  }
}
