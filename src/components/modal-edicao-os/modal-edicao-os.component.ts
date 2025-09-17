import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {OrdemServico} from '@models/ordem-servico';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal-edicao-os',
  imports: [
    Dialog,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './modal-edicao-os.component.html',
  styleUrl: './modal-edicao-os.component.scss'
})
export class ModalEdicaoOsComponent implements OnChanges {
  @Input() ordemServico!: OrdemServico
  visible = false
  header!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (this.ordemServico) {
      const {veiculo} = this.ordemServico
      this.header = `${veiculo.marca}${veiculo.modelo} - ${veiculo.placa}`
    }
  }

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

}
