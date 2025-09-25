import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MultiSelect} from 'primeng/multiselect';
import {Textarea} from 'primeng/textarea';
import {ButtonDirective} from 'primeng/button';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {Select} from 'primeng/select';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {marcaModelo} from '@consts/marca-modelo';
import {InputMask} from 'primeng/inputmask';
import {BaseForm} from '@components/base-form/base-form';
import { OrdemServico } from '@models/ordem-servico';

@Component({
  selector: 'app-os-form',
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
    InputMask
  ],
  templateUrl: './os-form.component.html',
  styleUrl: './os-form.component.scss'
})
export class OsFormComponent extends BaseForm<OrdemServico> implements OnInit, OnChanges {
  marcas = marcaModelo;
  modelos = [];

  mecanicos = [
    {label: 'João', value: 'joao'},
    {label: 'Maria', value: 'maria'},
    {label: 'Carlos', value: 'carlos'}
  ];

  servicos = [
    [
      {
        id: 1,
        nome: 'Troca de óleo',
        descricao: 'Substituição do óleo do motor para manter o bom funcionamento.',
        categoria: 'Manutenção',
        tempoEstimadoMin: 30
      },
      {
        id: 2,
        nome: 'Alinhamento',
        descricao: 'Ajuste do ângulo das rodas para melhorar estabilidade e desgaste dos pneus.',
        categoria: 'Manutenção',
        tempoEstimadoMin: 40
      },
      {
        id: 3,
        nome: 'Óleo Câmbio',
        descricao: 'Troca do óleo do câmbio para garantir o bom desempenho da transmissão.',
        categoria: 'Freios',
        tempoEstimadoMin: 60
      },
      {
        id: 4,
        nome: 'Troca de bateria',
        descricao: 'Substituição da bateria do veículo para garantir a partida e funcionamento elétrico.',
        categoria: 'Elétrica',
        tempoEstimadoMin: 20
      },
      {
        id: 5,
        nome: 'Balanceamento',
        descricao: 'Correção do equilíbrio das rodas para evitar vibrações no volante.',
        categoria: 'Manutenção',
        tempoEstimadoMin: 30
      },
      {
        id: 6,
        nome: 'Filtros do ar',
        descricao: 'Troca dos filtros de ar do motor para melhorar a combustão e desempenho.',
        categoria: 'Manutenção',
        tempoEstimadoMin: 25
      },
      {
        id: 7,
        nome: 'Troca de óleo',
        descricao: 'Substituição do óleo do motor para manter o bom funcionamento.',
        categoria: 'Manutenção',
        tempoEstimadoMin: 30
      },
      {
        id: 8,
        nome: 'Óleo Câmbio',
        descricao: 'Troca do óleo do câmbio para garantir o bom desempenho da transmissão.',
        categoria: 'Freios',
        tempoEstimadoMin: 60
      },
      {
        id: 9,
        nome: 'Troca de bateria',
        descricao: 'Substituição da bateria do veículo para garantir a partida e funcionamento elétrico.',
        categoria: 'Elétrica',
        tempoEstimadoMin: 20
      }
    ]

  ];

  private regexAntiga = /^[A-Z]{3}-?\d{4}$/;
  private regexNova = /^[A-Z]{3}\d[A-Z]\d{2}$/;

  placa = '';
  protected formSubmitted = false;

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      placa: ['AAA9999', Validators.required],
      mecanico: ['', Validators.required],
      servicos: [[], Validators.required],
      observacao: ['', Validators.required],
    });
    this.listenModelos()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue'] && this.initialValue) {
      this.form.patchValue(this.initialValue);
    }
  }

  listenModelos() {
    this.form.get('marca')?.valueChanges.subscribe(marca => {
      this.modelos = marca.modelos
      console.log(this.modelos)
    })
  }

  salvar() {
    this.formSubmitted = true;
    console.log('')
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

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }
}
