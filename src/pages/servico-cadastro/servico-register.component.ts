import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Textarea} from 'primeng/textarea';
import {ButtonDirective} from 'primeng/button';
import {InputGroup} from 'primeng/inputgroup';
import {InputNumber} from 'primeng/inputnumber';

@Component({
  selector: 'app-servico-register',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FloatLabel,
    InputText,
    Textarea,
    ButtonDirective,
    InputGroup,
    InputNumber
  ],
  templateUrl: './servico-register.component.html',
  styleUrl: './servico-register.component.scss'
})
export class ServicoRegisterComponent {
  private fb = inject(FormBuilder)
  form: FormGroup = this.fb.group({
    descricao: ['', Validators.required],
    nome: ['', Validators.required],
    tempoEstimadoDias: [0, Validators.required],
    tempoEstimadoHoras: [1, Validators.required],
    tempoEstimadoMinutos: [0, Validators.required],
  });

  salvar() {

  }

}
