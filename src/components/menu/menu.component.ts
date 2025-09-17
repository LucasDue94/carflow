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
      icon: '',
      items: [
        {
          label: 'Dashboard',
          icon: 'fa-solid fa-chart-simple',
          routerLink: 'gestao'
        }]
    }, {
      separator: true
    },
    {
      label: 'OS',
      items: [
        {
          label: 'Nova',
          icon: 'fa-solid fa-circle-plus',
          routerLink: 'os/new'
        },
        {
          label: 'Histórico',
          icon: 'fa-solid fa-newspaper',
          routerLink: 'os/list'
        }
      ]
    },
    {
      separator: true
    },
    {
      label: 'Mecânicos',
      items: [
        {
          label: 'Novo',
          icon: 'pi pi-cog',
          routerLink: 'mecanico/new'
        },
        {
          label: 'Ver todos',
          icon: 'mecanico/list',
        },
      ]
    }, {
      separator: true
    }, {
      label: 'Serviços',
      items: [
        {
          label: 'Novo',
          icon: 'pi pi-cog',
          routerLink: 'servico/new'
        },
        {
          label: 'Ver todos',
          icon: 'pi pi-inbox',
          routerLink: 'servico/list'

        },
      ]
    },
    {
      separator: true
    }
  ];
}
