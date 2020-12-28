import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { PagosGeneralesItems } from 'src/app/interfaces/adminpagos.interface';
import { ConjuntoItems } from 'src/app/interfaces/conjunto.interface';
import { AdminconjuntosService } from 'src/app/services/adminconjuntos.service';

@Component({
  selector: 'app-pagosgenerales',
  templateUrl: './pagosgenerales.component.html',
  styleUrls: ['./pagosgenerales.component.css']
})
export class PagosgeneralesComponent implements OnInit {

  constructor(private adminconjuntosService: AdminconjuntosService) { }

  dataSource: MatTableDataSource<PagosGeneralesItems>;
  conjuntos: ConjuntoItems[] = []
  selectedValue: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = [
    'idpago',
    'pagoestado',
    'nombreconjunto',
    'identificacion',
    'nombre',
    'apellido',
    'idfactura',
    'fechfactura',
    'fechapago',
    'valoradmin',
    'cuotaextra',
    'porcentajedescuento',
    'porcentajerecargo',
    'valortotal'
  ]
  
  ngOnInit(): void {
    this.getListaConjuntos()
  }
  
  getListaConjuntos() {
    this.adminconjuntosService.getListaConjuntos()
    .pipe(
      map(res => res.op_cur_lista_conjuntos)
    )
    .subscribe(resp => {
      this.conjuntos = resp;
    }, (err) => {
      console.error(err)
    })
  }

  consultarPagos() {
    this.getAdministradoresPagosGenerales(parseInt(this.selectedValue))
  }

  getAdministradoresPagosGenerales(idConjunto:Number) {
    this.adminconjuntosService.getAdministradoresPagosGenerales(idConjunto, 1)
    .pipe(
      map(res => res.op_cur_pagos_generales)
    )
    .subscribe(resp => {
      this.dataSource = new MatTableDataSource<PagosGeneralesItems>(resp);
      this.dataSource.paginator = this.paginator;
    }, (err) => {
      console.error(err)
    })
  }
}
