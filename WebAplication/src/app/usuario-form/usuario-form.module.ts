import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioFormComponent } from './usuario-form.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { AppModule } from "../app.module";
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [UsuarioFormComponent, FormDebugComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule
    ]
})
export class UsuarioFormModule { }
