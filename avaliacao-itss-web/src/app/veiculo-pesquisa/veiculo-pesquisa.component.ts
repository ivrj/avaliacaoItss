import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-pesquisa',
  templateUrl: './veiculo-pesquisa.component.html',
  styleUrls: ['./veiculo-pesquisa.component.css']
})
export class VeiculoPesquisaComponent   {
  listaVeiculos = [
    {
      id: 1,
      cor: 'b2eage',
      modelo: 'elaa',
      placa: 'a3asd2d'
    },
    {
      id: 2,
      cor: 'b2eage',
      modelo: 'elaa',
      placa: 'a3asd2d'
    },
    {
      id: 3,
      cor: 'marron',
      modelo: 'uno',
      placa: 'asdasd'
    }
  ];
}
