import {Component, signal} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {PhoneFormatPipe} from '@pipes/phone-format.pipe';
import {TableModule} from 'primeng/table';
import {dt} from '@primeng/themes';
import {ClienteFormComponent} from '@pages/cliente/cliente-form/cliente-form.component';
import {Cliente} from '@models/cliente';
import {mockClientes} from '@mocks/mock-clientes';

@Component({
  selector: 'app-cliente',
  imports: [
    Button,
    ButtonDirective,
    Dialog,
    FormsModule,
    InputGroup,
    InputGroupAddon,
    InputText,
    PhoneFormatPipe,
    TableModule,
    ClienteFormComponent
  ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  clientes: Cliente[] = mockClientes;
  globalFilters = ['id', 'veiculo.marca', 'veiculo.modelo', 'veiculo.placa', 'nome', 'telefone', 'mecanico.nome'];
  loading = false;

  searchValue!: string;

  protected readonly dt = dt;
  displayModalNovoCliente = signal(false)
  displayModalEdicaoCliente = signal(false)
  currentCliente!: Cliente;

  openModalNovoCliente() {
    this.displayModalNovoCliente.update(open => !open)
  };

  openModalEdicaoCliente(cliente: Cliente) {
    this.currentCliente = cliente;
    this.displayModalEdicaoCliente.update(open => !open)
  };

  close() {
    this.displayModalNovoCliente.set(false)
    this.displayModalEdicaoCliente.set(false)
  }

  salvar() {

  }
}
