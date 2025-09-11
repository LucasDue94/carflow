import {Component, Input} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {OrdemServico} from '../../model/ordem-servico';
import {ScrollPanel} from 'primeng/scrollpanel';
import {Card} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';
import {Tag} from 'primeng/tag';
import {HumanDatePipe} from '../../pipes/human-date.pipe';
import {PrevisaoStatusDirective} from '../directive/previsao-status.directive';
import {PhoneFormatPipe} from '../../pipes/phone-format.pipe';

@Component({
  selector: 'app-column',
  imports: [
    CdkDropList,
    ScrollPanel,
    CdkDragPlaceholder,
    Card,
    CdkDrag,
    PrimeTemplate,
    Tag,
    HumanDatePipe,
    PrevisaoStatusDirective,
    PhoneFormatPipe,
  ],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {
  @Input() connectedTo!: string[];
  @Input() items!: OrdemServico[];
  @Input() columnTitle!: string;
  @Input() listId!: string;

  drop(event: CdkDragDrop<OrdemServico[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // mover entre colunas **somente no drop**
      const item = event.previousContainer.data[event.previousIndex];

      // adiciona manualmente no destino
      event.container.data.splice(event.currentIndex, 0, item);

      // remove do array original
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }

  draggingItem: any = null;

  startDrag(item: any) {
    this.draggingItem = item;
  }

  endDrag() {
    this.draggingItem = null;
  }

}
