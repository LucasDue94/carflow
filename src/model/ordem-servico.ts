import {Cliente} from "./cliente";
import { Mecanico } from "./mecanico";
import {Servico} from "./servico";
import {Veiculo} from "./veiculo";

export interface OrdemServico {
  id: number;
  veiculo: Veiculo;
  cliente: Cliente;
  servicos: Servico[];
  observacao: string;
  dataEntrada: string;
  dataSaida: string;
  previsaoTermino: string;
  mecanico: Mecanico;
}
