import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-menu',
  imports: [
    Menu
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  items: MenuItem[] = [
    {
      label: 'Principal',
      items: [
        {
          label: 'Dashboard',
          icon: 'fa-solid fa-chart-simple',
          routerLink: 'dashboard'
        }]
    }, {
      separator: true
    },
    {
      label: 'Gestão',
      items: [
        {
          label: 'OS',
          icon: 'fa-solid fa-newspaper',
          routerLink: 'os/list'
        },
        {
          label: 'Clientes',
          icon: 'fa-solid fa-user',
          routerLink: 'cliente/list'
        },
        {
          label: 'Mecânicos',
          icon: 'pi pi-cog',
          routerLink: 'mecanico/list'
        },
        {
          label: 'Serviços',
          icon: 'pi pi-cog',
          routerLink: 'servico/list'
        },
      ]
    }
  ];
}
