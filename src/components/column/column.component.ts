import {Component, Input, ViewChild} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {OrdemServico} from '@models/ordem-servico';
import {ScrollPanel} from 'primeng/scrollpanel';
import {Card} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';
import {Tag} from 'primeng/tag';
import {HumanDatePipe} from '../../pipes/human-date.pipe';
import {PhoneFormatPipe} from '../../pipes/phone-format.pipe';
import {ModalEdicaoOsComponent} from '../modal-edicao-os/modal-edicao-os.component';
import {ModalVisualizarOsComponent} from '../modal-visualizar-os/modal-visualizar-os.component';
import {PrevisaoStatusDirective} from '@directives/previsao-status.directive';

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
    ModalEdicaoOsComponent,
    ModalVisualizarOsComponent,
  ],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {
  @Input() connectedTo!: string[];
  @Input() items!: OrdemServico[];
  @Input() columnTitle!: string;
  @Input() listId!: string;
  @Input() iconClass!: string;

  @ViewChild(ModalEdicaoOsComponent) modalEdicaoOs!: ModalEdicaoOsComponent;
  @ViewChild(ModalVisualizarOsComponent) modalVisualizarOs!: ModalVisualizarOsComponent;
  currentOs!: OrdemServico;

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

  setCurrentOs(os: OrdemServico) {
    console.log(os)
    this.currentOs = os
    this.modalVisualizarOs.open();
  }
}
