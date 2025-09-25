import { Veiculo } from "./veiculo";

export interface Cliente {
  nome: string;
  telefone: string;
  veiculos: Veiculo[];
}
