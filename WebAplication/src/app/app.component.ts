import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import { MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemsMenuLateral: MenuItem[] | any;
  itemsMenuSuperior: MenuItem[] | any;

  title = 'WebAplication';

  mostrarMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.authService.mostarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );

    this.itemsMenuLateral = [
      {
        label: 'Configurações',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink : '',
          },
          {
            label: 'Login',
            icon: 'pi pi-fw pi-plus',
            routerLink : '/login',
          },
        ],
      },
      {
        label: 'Alunos',
        icon: 'pi pi-fw pi-pencil',
        routerLink : '/alunos',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
      {
        label: 'Cursos',
        icon: 'pi pi-fw pi-file',
        routerLink : '/cursos',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
    this.itemsMenuSuperior = [
      { label: 'Home', icon: 'pi pi-fw pi-home' , routerLink : '' },
      { label: 'Alunos', icon: 'pi pi-fw pi-pencil', routerLink : '/alunos' },
      { label: 'Cursos', icon: 'pi pi-fw pi-file' , routerLink : '/cursos' },
      { label: 'Configurações', icon: 'pi pi-fw pi-cog' },
    ];
  }
}
