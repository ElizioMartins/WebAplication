import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'teste' && usuario.senha === "123"){

      this.usuarioAutenticado = true;

      this.mostarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    }else{
      this.usuarioAutenticado = false;
      this.mostarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
