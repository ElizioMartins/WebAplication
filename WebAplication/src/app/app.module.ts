import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CampoControlErroComponent } from './erro-form-control/campo-control-erro/campo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu/menu.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SlideMenu, SlideMenuModule } from 'primeng/slidemenu';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    BrowserAnimationsModule,
    ButtonModule,
    SlideMenuModule,
    TabMenuModule,
  ],
  providers: [AuthService, AuthGuard, CursosGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
