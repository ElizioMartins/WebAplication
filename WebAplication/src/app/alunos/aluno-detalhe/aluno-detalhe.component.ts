import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
id!:number;
  aluno!: any;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) =>{
       this.id = params['id'];

        this.aluno = this.alunosService.getAluno(this.id);
      }
    );
  }

  editarContato(){

    this.router.navigate(['/alunos', this.aluno.id, 'editar'])

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
