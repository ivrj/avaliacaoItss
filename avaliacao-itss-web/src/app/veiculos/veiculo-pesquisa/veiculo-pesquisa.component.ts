import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-veiculo-pesquisa',
  templateUrl: './veiculo-pesquisa.component.html',
  styleUrls: ['./veiculo-pesquisa.component.css']
})
export class VeiculoPesquisaComponent implements OnInit {
  listaVeiculos = [];

  constructor(private veiculosService: VeiculosService) { }


  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.veiculosService.pesquisar()
    .subscribe(data => this.listaVeiculos = data);
  }

  excluir(veiculo: any){
    this.veiculosService.excluir(veiculo.id)
    .subscribe(res => {
      this.pesquisar();
    })
  }
}
