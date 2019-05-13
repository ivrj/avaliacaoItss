import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IVeiculo } from './veiculo';
import { Veiculo } from './veiculo-form/model';



@Injectable({
  providedIn: 'root'
})

@Injectable()
export class VeiculosService {

  veiculosUrl = 'http://localhost:8080/veiculo';
  constructor(private http: HttpClient) { }

  pesquisar(): Observable<IVeiculo[]> {
    return this.http.get<IVeiculo[]>(this.veiculosUrl);

  }

  excluir(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
    const url = `${this.veiculosUrl}/${id}`;
    this.http.delete(url, httpOptions);
  }

  
  adicionar(veiculo: Veiculo): Observable<Veiculo> {
    const headers = new HttpHeaders();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Veiculo>(this.veiculosUrl, veiculo, httpOptions);
  }
}
