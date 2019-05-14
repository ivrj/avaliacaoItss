import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IVeiculo } from './veiculo';
import { Veiculo } from './veiculo-form/model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' 
 
  })
};
const  veiculosUrl = 'http://localhost:8080/veiculo';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class VeiculosService {

 
  constructor(private http: HttpClient) { }

  pesquisar(): Observable<IVeiculo[]> {
    return this.http.get<IVeiculo[]>(veiculosUrl);
  }

  excluir1(id: number) {
    
    const url = `${veiculosUrl}/${id}`;
    this.http.delete<void>(url);
  }

  excluir (id: number): Observable<{}> {
    const url = `${veiculosUrl}/${id}`;  
    return this.http.delete(url, httpOptions);
      
  }
  
  adicionar(veiculo: Veiculo): Observable<Veiculo> {
     
    return this.http.post<Veiculo>(veiculosUrl, veiculo, httpOptions);
  }
}
