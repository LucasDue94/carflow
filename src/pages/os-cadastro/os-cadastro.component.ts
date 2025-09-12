import {Component, inject} from '@angular/core';
import {MultiSelect} from 'primeng/multiselect';
import {Textarea} from 'primeng/textarea';
import {ButtonDirective} from 'primeng/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Select} from 'primeng/select';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {IftaLabel} from 'primeng/iftalabel';

@Component({
  selector: 'app-os-cadastro',
  imports: [
    MultiSelect,
    Textarea,
    ButtonDirective,
    ReactiveFormsModule,
    Select,
    FloatLabel,
    InputText,
    InputGroup,
    InputGroupAddon,
    IftaLabel
  ],
  templateUrl: './os-cadastro.component.html',
  styleUrl: './os-cadastro.component.scss'
})
export class OsCadastroComponent {
  private fb = inject(FormBuilder)
  form: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    placa: ['', Validators.required],
    mecanico: ['', Validators.required],
    servicos: [[], Validators.required],
    observacao: ['', Validators.required],
  });

  marcas = [
    {label: 'Toyota', value: 'toyota'},
    {label: 'Honda', value: 'honda'},
    {label: 'Ford', value: 'ford'}
  ];

  modelos = [
    {label: 'Corolla', value: 'corolla'},
    {label: 'Civic', value: 'civic'},
    {label: 'Focus', value: 'focus'}
  ];

  mecanicos = [
    {label: 'João', value: 'joao'},
    {label: 'Maria', value: 'maria'},
    {label: 'Carlos', value: 'carlos'}
  ];

  servicos = [
    {label: 'Troca de Óleo', value: 'troca_oleo'},
    {label: 'Revisão', value: 'revisao'},
    {label: 'Alinhamento', value: 'alinhamento'}
  ];

  salvar() {
    console.log('')
  }
}
