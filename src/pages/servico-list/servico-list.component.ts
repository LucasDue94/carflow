import {Component} from '@angular/core';
import {Servico} from '@models/servico';
import {TableModule} from 'primeng/table';
import {mockServicos} from '@mocks/mock-servicos';
import {FormsModule} from '@angular/forms';
import {dt} from '@primeng/themes';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {Button, ButtonDirective, ButtonIcon} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-servico-list',
  imports: [
    TableModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputText,
    ButtonDirective,
    Ripple,
    ButtonIcon,
    Button,
    InputGroup,
    InputGroupAddon
  ],
  templateUrl: './servico-list.component.html',
  styleUrl: './servico-list.component.scss'
})
export class ServicoListComponent {
  servicos: Servico[] = mockServicos;
  loading = false;
  searchValue!: string;

  protected readonly dt = dt;

  edit(servico: any) {

  }
}
