import {Component, inject} from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {InputGroup} from "primeng/inputgroup";
import {InputText} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputMask} from 'primeng/inputmask';

@Component({
  selector: 'app-mecanico-register',
  imports: [
    ButtonDirective,
    FloatLabel,
    InputGroup,
    InputText,
    ReactiveFormsModule,
    InputGroupAddon,
    InputMask
  ],
  templateUrl: './mecanico-register.component.html',
  styleUrl: './mecanico-register.component.scss'
})
export class MecanicoRegisterComponent {
  private fb = inject(FormBuilder)
  form: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', Validators.required]
  });

  salvar() {

  }
}
