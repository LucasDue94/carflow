import {OrdemServico} from "../model/ordem-servico";

export const mockAguardandoPecaOs: OrdemServico[] = [
  {
    id: 11,
    veiculo: {marca: 'Chevrolet', modelo: 'Prisma', renavam: '112345678901', placa: 'EFG-1122'},
    cliente: {
      nome: 'Aline Souza',
      telefone: '11987654324',
      carro: [{marca: 'Chevrolet', modelo: 'Prisma', renavam: '112345678901', placa: 'EFG-1122'}]
    },
    servicos: [{id: 12, descricao: 'Troca de óleo', categoria: 'Manutenção'}],
    observacao: '',
    dataEntrada: '2025-09-10T07:30:00',
    dataSaida: '2025-09-11T15:30:00',
    previsaoTermino: '2025-09-11T11:00:00',
    mecanico: {id: 1, nome: 'João Pereira', telefone: '11912345678'}
  },
  {
    id: 12,
    veiculo: {marca: 'Toyota', modelo: 'Yaris', renavam: '122345678901', placa: 'HIJ-3344'},
    cliente: {
      nome: 'Diego Lima',
      telefone: '11998765434',
      carro: [{marca: 'Toyota', modelo: 'Yaris', renavam: '122345678901', placa: 'HIJ-3344'}]
    },
    servicos: [{id: 13, descricao: 'Óleo Câmbio', categoria: 'Freios'}],
    observacao: '',
    dataEntrada: '2025-09-11T09:00:00',
    dataSaida: '2025-09-12T17:00:00',
    previsaoTermino: '2025-09-11T16:00:00',
    mecanico: {id: 2, nome: 'Marcos Lima', telefone: '11923456789'}
  },
];
