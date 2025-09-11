import {Component, Input} from '@angular/core';
import {Card} from "primeng/card";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {PrimeTemplate} from "primeng/api";
import { OrdemServico } from '../../model/ordem-servico';

@Component({
  selector: 'app-card-os',
  imports: [
    Card,
    CdkDrag,
    PrimeTemplate
  ],
  templateUrl: './card-os.component.html',
  styleUrl: './card-os.component.scss'
})
export class CardOsComponent {
  @Input() ordemServico!: OrdemServico;
  @Input() isDragging = false;
  draggingItem: any = null;

  startDrag(item: any) {
    this.draggingItem = item;
  }

  endDrag() {
    this.draggingItem = null;
  }

}
