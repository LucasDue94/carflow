import {Component} from '@angular/core';
import {Servico} from '@models/servico';
import {TableModule} from 'primeng/table';
import {mockServicos} from '@mocks/mock-servicos';

@Component({
  selector: 'app-servico-list',
  imports: [
    TableModule,
  ],
  templateUrl: './servico-list.component.html',
  styleUrl: './servico-list.component.scss'
})
export class ServicoListComponent {
  servicos: Servico[] = mockServicos;

}
