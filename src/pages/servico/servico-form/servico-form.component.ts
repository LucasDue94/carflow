import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Textarea} from 'primeng/textarea';
import {InputGroup} from 'primeng/inputgroup';
import {InputNumber} from 'primeng/inputnumber';
import {Servico} from '@models/servico';
import {BaseForm} from '@components/base-form/base-form';

@Component({
  selector: 'app-servico-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FloatLabel,
    InputText,
    Textarea,
    InputGroup,
    InputNumber
  ],
  templateUrl: './servico-form.component.html',
  styleUrl: './servico-form.component.scss'
})
export class ServicoFormComponent extends BaseForm<Servico> implements OnInit, OnChanges {

  ngOnInit(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      nome: ['', Validators.required],
      tempoEstimadoDias: [0, Validators.required],
      tempoEstimadoHoras: [1, Validators.required],
      tempoEstimadoMin: [0, Validators.required],
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue'] && this.initialValue) {
      this.form.patchValue(this.initialValue);
    }
  }

}
