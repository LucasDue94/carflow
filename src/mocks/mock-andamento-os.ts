import {OrdemServico} from "../model/ordem-servico";

export const mockAndamentoOs: OrdemServico[] = [
  {
    id: 6,
    veiculo: {marca: 'Fiat', modelo: 'Argo', renavam: '62345678901', placa: 'PQR-1122'},
    cliente: {
      nome: 'Sérgio Almeida',
      telefone: '11987654322',
      carro: [{marca: 'Fiat', modelo: 'Argo', renavam: '62345678901', placa: 'PQR-1122'}]
    },
    servicos: [
      {id: 7, descricao: 'Troca de óleo', categoria: 'Manutenção'},
    ],
    observacao: '',
    dataEntrada: '2025-09-10T07:00:00',
    dataSaida: '2025-09-11T17:30:00',
    previsaoTermino: '2025-09-10T10:00:00',
    mecanico: {id: 1, nome: 'João Pereira', telefone: '11912345678'}
  },
  {
    id: 7,
    veiculo: {marca: 'Renault', modelo: 'Sandero', renavam: '72345678901', placa: 'STU-3344'},
    cliente: {
      nome: 'Mariana Costa',
      telefone: '11998765433',
      carro: [{marca: 'Renault', modelo: 'Sandero', renavam: '72345678901', placa: 'STU-3344'}]
    },
    servicos: [
      {id: 8, descricao: 'Óleo Câmbio', categoria: 'Freios'}
    ],
    observacao: 'Urgente',
    dataEntrada: '2025-09-11T08:00:00',
    dataSaida: '2025-09-12T12:00:00',
    previsaoTermino: '2025-09-11T18:00:00',
    mecanico: {id: 2, nome: 'Marcos Lima', telefone: '11923456789'}
  },
  {
    id: 8,
    veiculo: {marca: 'Nissan', modelo: 'Versa', renavam: '82345678901', placa: 'VWX-5566'},
    cliente: {
      nome: 'Felipe Oliveira',
      telefone: '11987654323',
      carro: [{marca: 'Nissan', modelo: 'Versa', renavam: '82345678901', placa: 'VWX-5566'}]
    },
    servicos: [
      {id: 9, descricao: 'Troca de bateria', categoria: 'Elétrica'}
    ],
    observacao: '',
    dataEntrada: '2025-09-12T09:00:00',
    dataSaida: '2025-09-13T17:00:00',
    previsaoTermino: '2025-09-12T15:00:00',
    mecanico: {id: 3, nome: 'Paulo Costa', telefone: '11934567890'}
  },
];
