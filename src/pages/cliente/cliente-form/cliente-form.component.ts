import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FloatLabel} from 'primeng/floatlabel';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputMask} from 'primeng/inputmask';
import {InputText} from 'primeng/inputtext';
import {Cliente} from '@models/cliente';
import {BaseForm} from '@components/base-form/base-form';
import {marcaModelo} from '@consts/marca-modelo';
import {Select} from 'primeng/select';

@Component({
  selector: 'app-cliente-form',
  imports: [
    FloatLabel,
    FormsModule,
    InputGroup,
    InputGroupAddon,
    InputMask,
    InputText,
    ReactiveFormsModule,
    Select
  ],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss'
})
export class ClienteFormComponent extends BaseForm<Cliente> implements OnInit, OnChanges {
  private regexAntiga = /^[A-Z]{3}-?\d{4}$/;
  private regexNova = /^[A-Z]{3}\d[A-Z]\d{2}$/;
  protected readonly marcas = marcaModelo;
  modelos = [];

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
    });
    this.listenModelos();
  }



  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue'] && this.initialValue) {
      this.form.patchValue(this.initialValue);
    }
  }

  listenModelos() {
    this.form.get('marca')?.valueChanges.subscribe(marca => {
      this.modelos = marca.modelos
    })
  }

  onComplete() {
    // Converte para maiúscula e remove espaços
    const placaControl = this.form.get('placa');
    const placaFormatada = placaControl?.value?.toUpperCase()?.trim();

    console.log(placaFormatada)
    // Valida contra os dois formatos
    if (this.regexAntiga.test(placaFormatada) || this.regexNova.test(placaFormatada)) {
      console.log('Placa válida:', placaFormatada);
      placaControl?.setValue(placaFormatada)
    } else {
      console.log('Placa inválida!');
      placaControl?.setErrors({placa: 'placa inválida'})
      placaControl?.updateValueAndValidity()
      // placaControl?.setValue('')
    }
  }

  mask: string = '*******';
}
