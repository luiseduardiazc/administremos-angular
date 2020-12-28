import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagosGenerales } from '../interfaces/adminpagos.interface';
import { Conjunto } from '../interfaces/conjunto.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AdminconjuntosService {

  constructor(private http: HttpClient) { }

getListaConjuntos(): Observable<Conjunto> {
  return this.http.get<Conjunto>(`${ base_url }/administradores/conjuntos`)
}

getAdministradoresPagosGenerales(idconjunto: Number, pagina:Number): Observable<PagosGenerales> {
  if (pagina === null || pagina === 0) {
    pagina = 1
  }

  let httpParams = new HttpParams()
      .set('idconjunto', idconjunto.toString())
      .set('pagina', pagina.toString())
      
  return this.http.get<PagosGenerales>(`${ base_url }/administradores/pagos/generales`, {params: httpParams})
}

}
