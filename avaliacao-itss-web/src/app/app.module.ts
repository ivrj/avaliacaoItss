import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import { VeiculoFormComponent } from './veiculos/veiculo-form/veiculo-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { VeiculosService } from './veiculos/veiculos.service';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './clientes/cliente.service';
import { PatioService } from './patio/patio.service';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { PatioFormComponent } from './patio/patio-form/patio-form.component';

 

@NgModule({
  declarations: [
    AppComponent,
    VeiculoFormComponent,
    NavbarComponent,
    ClienteFormComponent,
    ClienteFormComponent,
    PatioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    HttpClientModule,
    DropdownModule,
    TooltipModule,
    FormsModule
  ],
  providers: [VeiculosService,ClienteService, PatioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
