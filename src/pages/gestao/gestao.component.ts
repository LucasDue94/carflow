import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {OrdemServico} from '@models/ordem-servico';
import {mockEntradaOs} from '../../mocks/mock-entrada-os';
import {mockAndamentoOs} from '../../mocks/mock-andamento-os';
import {mockAguardandoPecaOs} from '../../mocks/mock-aguardando-peca-os';
import {ColumnComponent} from '../../components/column/column.component';

@Component({
  selector: 'app-gestao',
  imports: [
    ColumnComponent
  ],
  templateUrl: './gestao.component.html',
  styleUrl: './gestao.component.scss'
})
export class GestaoComponent {
  todo: OrdemServico[] = mockEntradaOs;

  doing: OrdemServico[] = mockAndamentoOs;

  done: OrdemServico[] = [];

  waiting: OrdemServico[] = mockAguardandoPecaOs

  drop(event: CdkDragDrop<OrdemServico[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
