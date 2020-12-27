import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrdenTrabajo} from '../interfaces/ordentrabajo.interface';
import { ValidarPago } from '../models/validarpago.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }
  
  getOrdenesTrabajo() : Observable<OrdenTrabajo> {
    return this.http.get<OrdenTrabajo>(`${ base_url }/empleado/ordenes`)
  }

  aprobarPago(data: ValidarPago) : Observable<ValidarPago> {
    return this.http.post<ValidarPago>(`${ base_url }/empleado/ordenes/pago/aceptar`, data)
  }

  rechazarPago(data: ValidarPago) : Observable<ValidarPago> {
    return this.http.post<ValidarPago>(`${ base_url }/empleado/ordenes/pago/rechazar`, data)
  }

}
