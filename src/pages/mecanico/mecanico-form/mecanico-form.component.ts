import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {InputGroup} from "primeng/inputgroup";
import {InputText} from "primeng/inputtext";
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputMask} from 'primeng/inputmask';
import {BaseForm} from '@components/base-form/base-form';
import {Mecanico} from '@models/mecanico';

@Component({
  selector: 'app-mecanico-form',
  imports: [
    ButtonDirective,
    FloatLabel,
    InputGroup,
    InputText,
    ReactiveFormsModule,
    InputGroupAddon,
    InputMask
  ],
  templateUrl: './mecanico-form.component.html',
  styleUrl: './mecanico-form.component.scss'
})
export class MecanicoFormComponent extends BaseForm<Mecanico> implements OnInit, OnChanges {

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue'] && this.initialValue) {
      this.form.patchValue(this.initialValue);
    }
  }
}
