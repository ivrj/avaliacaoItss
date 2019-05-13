import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { Veiculo } from './model';
import { FormControl } from '@angular/forms';
import { Header } from 'primeng/components/common/shared';
import { Observable } from 'rxjs';

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

  pesquisar() {
    this.veiculosService.pesquisar()
      .subscribe(data => this.listaVeiculos = data);
  }

  excluir(veiculo: any) {

    this.veiculosService.excluir(veiculo.id);

  }

  salvar(form: FormControl) {
    this.veiculosService.adicionar(this.veiculo)
    .subscribe(veiculo => this.pesquisar());

  }



}
