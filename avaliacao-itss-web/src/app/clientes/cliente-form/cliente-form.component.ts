import { Component, OnInit } from '@angular/core';
import { Cliente } from './model';
import { FormControl } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  listaClientes = [];
  cliente = new Cliente();
  constructor(private clienteService: ClienteService) { }


  ngOnInit() {
    this.pesquisar();
  }

  limparCampos(){
    this.cliente = new Cliente();
  }

  pesquisarPorNome(nome:String) {
    this.clienteService.pesquisarPorNome(nome)
      .subscribe(data => this.listaClientes = data);
  }

  pesquisar() {
    this.clienteService.pesquisar()
      .subscribe(data => this.listaClientes = data);
  }

  excluir(cliente: any) {

    this.clienteService.excluir(cliente.id)
      .subscribe(() => this.pesquisar());

  }


  salvar(form: FormControl) {
    this.clienteService.adicionar(this.cliente)
    .subscribe(cliente => {
      this.pesquisar(); 
      this.limparCampos()
    });

  }


}
