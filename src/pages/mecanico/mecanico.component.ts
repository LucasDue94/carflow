import {Component, signal} from '@angular/core';
import { mockMecanicos } from '@mocks/mock-mecanicos';
import {dt} from '@primeng/themes';
import { Mecanico } from '@models/mecanico';
import {Button, ButtonDirective} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {ServicoFormComponent} from '@pages/servico/servico-form/servico-form.component';
import {TableModule} from 'primeng/table';
import {MecanicoFormComponent} from '@pages/mecanico/mecanico-form/mecanico-form.component';

@Component({
  selector: 'app-mecanico',
  imports: [
    Button,
    ButtonDirective,
    Dialog,
    FormsModule,
    InputGroup,
    InputGroupAddon,
    InputText,
    ServicoFormComponent,
    TableModule,
    MecanicoFormComponent
  ],
  templateUrl: './mecanico.component.html',
  styleUrl: './mecanico.component.scss'
})
export class MecanicoComponent {
  mecanicos: Mecanico[] = mockMecanicos;
  loading = false;
  searchValue!: string;

  protected readonly dt = dt;
  displayModalNovoMecanico = signal(false)
  displayModalEdicaoMecanico = signal(false)
  currentMecanico!: Mecanico;

  edit(Mecanico: any) {

  }

  openModalNovoMecanico() {
    this.displayModalNovoMecanico.update(open => !open)
  };

  openModalEdicaoMecanico(Mecanico: Mecanico) {
    this.currentMecanico = Mecanico;
    this.displayModalEdicaoMecanico.update(open => !open)
  };

  close() {
    this.displayModalNovoMecanico.set(false)
    this.displayModalEdicaoMecanico.set(false)
  }

  salvar() {

  }

  cancel() {
  }
}
