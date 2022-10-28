import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  verificaValidTouched(campo: { valid: any; touched: any; }){
    //console.log("verificaValidTouched", campo, campo.valid, campo.touched);
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: { valid: any; touched: any; }){
    //console.log("aplicaCssErro", campo);

    return{
      'has-erro': this.verificaValidTouched(campo),
      'has-feedback':this.verificaValidTouched(campo)
    }
  }

}
