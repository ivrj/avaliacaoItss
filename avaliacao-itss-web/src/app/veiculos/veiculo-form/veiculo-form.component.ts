import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { Veiculo } from './model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {
  listaVeiculos = [];
  veiculo = new Veiculo();
  constructor(private veiculosService: VeiculosService) { }


  ngOnInit() {
    this.pesquisar();
  }

  limparCampos(){
    this.veiculo = new Veiculo();
  }

  pesquisar() {
    this.veiculosService.pesquisar()
      .subscribe(data => this.listaVeiculos = data);
  }

  excluir(veiculo: any) {

    this.veiculosService.excluir(veiculo.id)
      .subscribe(() => this.pesquisar());

  }


  salvar(form: FormControl) {
    this.veiculosService.adicionar(this.veiculo)
    .subscribe(veiculo => {
      this.pesquisar(); 
      this.limparCampos()
    });

  }



}
