import { OrdemServico } from "../model/ordem-servico";

export const mockEntradaOs: OrdemServico[] = [{
  id: 1,
  veiculo: {marca: 'Ford', modelo: 'Ka', renavam: '12345678901', placa: 'ABC-1234'},
  cliente: {
    nome: 'Carlos Silva',
    telefone: '11987654321',
    carro: [{marca: 'Ford', modelo: 'Ka', renavam: '12345678901', placa: 'ABC-1234'}]
  },
  servicos: [
    {id: 1, descricao: 'Troca de óleo', categoria: 'Manutenção'},
    {id: 2, descricao: 'Alinhamento', categoria: 'Manutenção'},
    {id: 5, descricao: 'Balanceamento', categoria: 'Manutenção'},
    {id: 6, descricao: 'Filtros do ar', categoria: 'Manutenção'},
  ],
  observacao: 'Cliente solicita urgência',
  dataEntrada: '2025-09-10T08:00:00',
  dataSaida: '2025-09-11T17:00:00',
  previsaoTermino: '2025-09-11T12:00:00',
  mecanico: {id: 1, nome: 'João Pereira', telefone: '11912345678'}
},
  {
    id: 2,
    veiculo: {marca: 'Chevrolet', modelo: 'Onix', renavam: '22345678901', placa: 'DEF-5678'},
    cliente: {
      nome:
        'Ana Souza',
      telefone:
        '11998765432',
      carro: [{marca: 'Chevrolet', modelo: 'Onix', renavam: '22345678901', placa: 'DEF-5678'}]
    },
    servicos: [
      {id: 3, descricao: 'Óleo Câmbio', categoria: 'Freios'},
      {id: 6, descricao: 'Filtros do ar', categoria: 'Manutenção'},
    ],
    observacao: '',
    dataEntrada: '2025-09-10T09:00:00',
    dataSaida: '2025-09-12T15:00:00',
    previsaoTermino: '2025-09-11T14:00:00',
    mecanico: {id: 2, nome: 'Marcos Lima', telefone: '11923456789'}
  },
  {
    id: 3,
    veiculo: {marca: 'Volkswagen', modelo: 'Gol', renavam: '32345678901', placa: 'GHI-9012'},
    cliente: {
      nome:
        'Bruna Martins',
      telefone:
        '11987651234',
      carro: [{marca: 'Volkswagen', modelo: 'Gol', renavam: '32345678901', placa: 'GHI-9012'}]
    },
    servicos: [
      {id: 4, descricao: 'Troca de bateria', categoria: 'Elétrica'}
    ],
    observacao: 'Cliente pediu avaliação do ar-condicionado',
    dataEntrada: '2025-09-09T10:00:00',
    dataSaida: '2025-09-11T10:00:00',
    previsaoTermino: '2025-09-10T16:00:00',
    mecanico: {id: 3, nome: 'Paulo Costa', telefone: '11934567890'}
  }
]
