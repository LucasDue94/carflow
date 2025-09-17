import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {OrdemServico} from '@models/ordem-servico';
import {Tag} from 'primeng/tag';
import {HumanDatePipe} from '../../pipes/human-date.pipe';
import {PrevisaoStatusDirective} from '@directives/previsao-status.directive';
import {Divider} from 'primeng/divider';
import {PhoneFormatPipe} from '@pipes/phone-format.pipe';
import {FloatLabel} from 'primeng/floatlabel';
import {MultiSelect} from 'primeng/multiselect';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-modal-visualizar-os',
  imports: [
    Dialog,
    Tag,
    HumanDatePipe,
    PrevisaoStatusDirective,
    Divider,
    PhoneFormatPipe,
    FloatLabel,
    MultiSelect,
    ReactiveFormsModule,
    Button,
  ],
  templateUrl: './modal-visualizar-os.component.html',
  styleUrl: './modal-visualizar-os.component.scss'
})
export class ModalVisualizarOsComponent implements OnChanges {
  @Input() ordemServico!: OrdemServico
  visible = false
  header!: string;
  editServicos = false;
  servicos = [
    {id: 1, descricao: 'Troca de óleo', categoria: 'Manutenção'},
    {id: 2, descricao: 'Alinhamento', categoria: 'Manutenção'},
    {id: 3, descricao: 'Óleo Câmbio', categoria: 'Freios'},
    {id: 4, descricao: 'Troca de bateria', categoria: 'Elétrica'},
    {id: 5, descricao: 'Balanceamento', categoria: 'Manutenção'},
    {id: 6, descricao: 'Filtros do ar', categoria: 'Manutenção'},
    {id: 7, descricao: 'Troca de óleo', categoria: 'Manutenção'},
    {id: 8, descricao: 'Óleo Câmbio', categoria: 'Freios'},
    {id: 9, descricao: 'Troca de bateria', categoria: 'Elétrica'}
  ]
  private fb = inject(FormBuilder)

  form: FormGroup = this.fb.group({
    mecanico: ['', Validators.required],
    servicos: [[], Validators.required],
    observacao: ['', Validators.required],
    previsao: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges) {
    if (this.ordemServico) {
      const {veiculo} = this.ordemServico
      this.header = `${veiculo.marca} ${veiculo.modelo} - ${veiculo.placa}`


      this.servicoControl?.setValue(this.ordemServico.servicos.map(({id}) => id))
    }
  }

  get servicoControl() {
    return this.form.get('servicos');
  }


  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  editMode() {
    this.editServicos = true;
  }
}
