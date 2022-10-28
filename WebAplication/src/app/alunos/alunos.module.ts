import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDetalheResolver } from './guards/alunos-detalhe.resolver';
import { ValidatorService } from '../erro-form-control/validator.service';
import { CampoControlErroComponent } from '../erro-form-control/campo-control-erro/campo-control-erro.component';

@NgModule({
  imports: [CommonModule, FormsModule, AlunosRoutingModule],
  exports: [],
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent, CampoControlErroComponent],
  providers: [
    AlunosService,
    AlunosGuard,
    AlunosDeactivateGuard,
    AlunosDetalheResolver,
    ValidatorService
  ],
})
export class AlunosModule {}
