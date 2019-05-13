import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IVeiculo } from './veiculo';



@Injectable({
  providedIn: 'root'
})

@Injectable()
export class VeiculosService {

  veiculosUrl = 'http://localhost:8080/veiculo';
  constructor(private http: HttpClient) { }

  pesquisar(): Observable<IVeiculo[]> {
    return this.http.get<IVeiculo[]>(this.veiculosUrl);
    // return this.http.get(`${this.veiculosUrl}`)
    //   .toPromise()
    //   .then(response => {
    //     console.log(response.toString());
    //   })

  }

  excluir(id: number) {
    return this.http.delete(this.veiculosUrl + "/" + id);
  }
}
