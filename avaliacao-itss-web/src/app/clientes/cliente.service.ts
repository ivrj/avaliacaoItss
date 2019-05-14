import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICliente } from './cliente';
import { Cliente } from './cliente-form/model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' 
 
  })
};
const  clientesUrl = 'http://localhost:8080/cliente';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ClienteService {

 
  constructor(private http: HttpClient) { }

  pesquisar(nome: String): Observable<ICliente[]> {
    const url = `${clientesUrl}/${nome}`;
    return this.http.get<ICliente[]>(url);
  }

  excluir1(id: number) {
    
    const url = `${clientesUrl}/${id}`;
    this.http.delete<void>(url);
  }

  excluir (id: number): Observable<{}> {
    const url = `${clientesUrl}/${id}`;  
    return this.http.delete(url, httpOptions);
      
  }
  
  adicionar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(clientesUrl, cliente, httpOptions);
  }
}
