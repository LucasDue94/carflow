import {Component, signal} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {OrdemServico} from '@models/ordem-servico';
import {dt} from '@primeng/themes';
import {OsFormComponent} from '@pages/os/os-form/os-form.component';
import {mockEntradaOs} from '@mocks/mock-entrada-os';
import {PhoneFormatPipe} from '@pipes/phone-format.pipe';
import {DateFormatPipe} from '@pipes/date-format.pipe';

@Component({
  selector: 'app-os',
  imports: [
    Button,
    ButtonDirective,
    Dialog,
    FormsModule,
    InputGroup,
    InputGroupAddon,
    InputText,
    TableModule,
    OsFormComponent,
    PhoneFormatPipe,
    DateFormatPipe
  ],
  templateUrl: './os.component.html',
  styleUrl: './os.component.scss'
})
export class OsComponent {
  ordens: OrdemServico[] = mockEntradaOs;
  loading = false;
  searchValue!: string;

  protected readonly dt = dt;
  displayModalNovaOS = signal(false)
  displayModalEdicaoOS = signal(false)
  currentOS!: OrdemServico;
  globalFilters = ['id', 'veiculo.marca', 'veiculo.modelo', 'veiculo.placa', 'cliente.nome', 'cliente.telefone', 'mecanico.nome']

  openModalNovoServico() {
    this.displayModalNovaOS.update(open => !open)
  };

  openModalEdicaoServico(os: OrdemServico) {
    this.currentOS = os;
    this.displayModalEdicaoOS.update(open => !open)
  };

  close() {
    this.displayModalNovaOS.set(false)
    this.displayModalEdicaoOS.set(false)
  }

  salvar() {

  }
}
