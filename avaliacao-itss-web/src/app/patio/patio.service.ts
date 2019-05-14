import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IPatio } from './patio';
import { Patio } from './patio-form/model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' 
 
  })
};
const  patiosUrl = 'http://localhost:8080/patio';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PatioService {

 
  constructor(private http: HttpClient) { }

  pesquisar(): Observable<IPatio[]> {
    return this.http.get<IPatio[]>(patiosUrl);
  }

  pesquisarPorNome(nome: String): Observable<IPatio[]> {
    const url = `${patiosUrl}/${nome}`;
    return this.http.get<IPatio[]>(url);
  }

  excluir1(id: number) {
    
    const url = `${patiosUrl}/${id}`;
    this.http.delete<void>(url);
  }

  excluir (id: number): Observable<{}> {
    const url = `${patiosUrl}/${id}`;  
    return this.http.delete(url, httpOptions);
      
  }
  
  adicionar(patio: Patio): Observable<Patio> {
    return this.http.post<Patio>(patiosUrl, patio, httpOptions);
  }
}
