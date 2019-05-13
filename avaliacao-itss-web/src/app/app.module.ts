import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import {VeiculoPesquisaComponent} from './veiculos/veiculo-pesquisa/veiculo-pesquisa.component';
import { VeiculoCadastroComponent } from './veiculos/veiculo-cadastro/veiculo-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { VeiculosService } from './veiculos/veiculos.service';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoPesquisaComponent,
    VeiculoCadastroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    HttpClientModule,
    DropdownModule,
    TooltipModule
  ],
  providers: [VeiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
