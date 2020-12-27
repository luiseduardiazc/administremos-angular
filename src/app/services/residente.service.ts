import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Factura } from '../interfaces/factura.interface';
import { PagosHistoricoResidente } from '../interfaces/historicoresidente.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ResidenteService {
  
  constructor(private http: HttpClient) { }

  getFacturas() : Observable<Factura[]> {
    return this.http.get<Factura[]>(`${ base_url }/factura/residente`)
  }

  generarPago (selected: Factura[], fileToUpload: File) : Observable<any> {
    const formData = new FormData();
    const valorNeto: Number = selected[0].valAdministracion.valueOf() + selected[0].cuotaExtra.valueOf(); 
   formData.append('file', fileToUpload)
    formData.append('body', `
    {
      idFactura: ${selected[0].idFactura},
      valorNeto: ${valorNeto},
      valorTotal: ${selected[0].total},
      porcentajeDescuento: ${selected[0].facDescuento},
      porcentajeRecargo: ${selected[0].facRecargo}
    }
    `)
    return this.http.post(`${ base_url }/pagos/residente`, formData)
  }

  getPagosHistoricos(fechaInicio: Date, fechaFin: Date) : Observable<PagosHistoricoResidente> {
    
       const fecInicio =  formatDate(fechaInicio, 'dd/MM/yyyy', 'en_US') 
       const fecFin = formatDate(fechaFin, 'dd/MM/yyyy', 'en_US') 
    let httpParams = new HttpParams()
    .set('fechaInicio', fecInicio)
    .set('fechaFin', fecFin)
    return this.http.get<PagosHistoricoResidente>(`${ base_url }/pagos/residente`, {params: httpParams});
  }

}
