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
      label: 'OS',
      items: [
        {
          label: 'Nova',
          icon: 'pi pi-plus',
        },
        {
          label: 'Histórico',
          icon: 'pi pi-search',
        }
      ]
    },
    {
      label: 'Mecânicos',
      items: [
        {
          label: 'Novo',
          icon: 'pi pi-cog',
        },
        {
          label: 'Ver todos',
          icon: 'pi pi-inbox',
        },
      ]
    },
    {
      separator: true
    }
  ];
}
