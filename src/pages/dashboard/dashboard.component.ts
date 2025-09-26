import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {OrdemServico} from '@models/ordem-servico';
import {mockEntradaOs} from '../../mocks/mock-entrada-os';
import {mockAndamentoOs} from '../../mocks/mock-andamento-os';
import {mockAguardandoPecaOs} from '../../mocks/mock-aguardando-peca-os';
import {ColumnComponent} from '../../components/column/column.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ColumnComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  todo: OrdemServico[] = mockEntradaOs;

  doing: OrdemServico[] = [];

  done: OrdemServico[] = [];

  waiting: OrdemServico[] = []
  todoIcon = "fa-solid fa-flag-checkered";
  doingIcon = "fa-solid fa-bars-progress";
  waitingIcon = "fa-solid fa-hourglass-half";
  doneIcon = "fa-solid fa-check";

}
