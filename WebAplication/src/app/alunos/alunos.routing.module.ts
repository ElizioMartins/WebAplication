import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalheResolver } from './guards/alunos-detalhe.resolver';
import { DataFormComponent } from './data-form/data-form.component';

const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent,
  canActivateChild:[AlunosGuard],
  children : [
    { path: 'novo', component: AlunoFormComponent },
    { path: ':id', component: AlunoDetalheComponent,
  resolve:{aluno : AlunosDetalheResolver}
  },
    { path: ':id/editar', component: AlunoFormComponent,
  canDeactivate:[AlunosDeactivateGuard]
  },

  { path: ':id/dataForm', component: DataFormComponent,
  },

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
