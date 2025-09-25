import {Component, signal} from '@angular/core';
import {Servico} from '@models/servico';
import {TableModule} from 'primeng/table';
import {mockServicos} from '@mocks/mock-servicos';
import {FormsModule} from '@angular/forms';
import {dt} from '@primeng/themes';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {Button, ButtonDirective} from 'primeng/button';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {Dialog} from 'primeng/dialog';
import {ServicoFormComponent} from '@pages/servico/servico-form/servico-form.component';

@Component({
  selector: 'app-servico',
  imports: [
    TableModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputText,
    Button,
    InputGroup,
    InputGroupAddon,
    Dialog,
    ServicoFormComponent,
    ButtonDirective
  ],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.scss'
})
export class ServicoComponent {
  servicos: Servico[] = mockServicos;
  loading = false;
  searchValue!: string;

  protected readonly dt = dt;
  displayModalNovoServico = signal(false)
  displayModalEdicaoServico = signal(false)
  currentServico!: Servico;

  edit(servico: any) {

  }

  openModalNovoServico() {
    this.displayModalNovoServico.update(open => !open)
  };

  openModalEdicaoServico(servico: Servico) {
    this.currentServico = servico;
    console.log(servico)
    this.displayModalEdicaoServico.update(open => !open)
  };

  close() {
    this.displayModalNovoServico.set(false)
    this.displayModalEdicaoServico.set(false)
  }

  salvar() {

  }

  cancel() {
  }
}
