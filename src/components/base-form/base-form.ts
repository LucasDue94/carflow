import {Component, inject, Input} from '@angular/core';
import {Servico} from '@models/servico';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrdemServico} from '@models/ordem-servico';

@Component({
  selector: 'app-base-form',
  imports: [],
  templateUrl: './base-form.html',
  styleUrl: './base-form.scss'
})
export class BaseForm<T> {
  @Input() isEdit!: boolean;
  @Input() initialValue!: T;

  protected form!: FormGroup;
  protected fb = inject(FormBuilder)

}
