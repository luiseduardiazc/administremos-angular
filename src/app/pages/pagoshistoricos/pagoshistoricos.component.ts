import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PagosHistoricoItems, RangeDates } from 'src/app/interfaces/historicoresidente.interface';
import { ResidenteService } from 'src/app/services/residente.service';
import {FormGroup, FormControl} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pagoshistoricos',
  templateUrl: './pagoshistoricos.component.html',
  styleUrls: ['./pagoshistoricos.component.css']
})
export class PagoshistoricosComponent implements OnInit {

  constructor (private residenteService: ResidenteService) {}

  ngOnInit(): void {
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  dataSource: MatTableDataSource<PagosHistoricoItems>
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  displayedColumns: string[] = [
    'idpago',
    'pagoestado',
    'idresidencia',
    'fechfactura',
    'fechapago',
    'valoradmin',
    'cuotaextra',
    'porcentajedescuento',
    'porcentajerecargo',
    'valortotal'    
  ]

  consultarPagos() {
    const dateObject = JSON.stringify(this.range.value)
    const rangeDates: RangeDates = JSON.parse(dateObject)

    if (rangeDates.start === null || rangeDates.end === null) {
      Swal.fire(
        'Olvido las Fechas?',
        'Debe proporcionar una Fecha de Inicio y una Fecha Fin',
        'question'
      )
    } else {
      const fechaInicio = new Date(rangeDates.start.toString());
      const fechaFin = new Date(rangeDates.end.toString());
      this.getPagosHistoricos(fechaInicio, fechaFin)
    }
  }
  getPagosHistoricos(fechaInicio: Date, fechaFin: Date) {
    this.residenteService.getPagosHistoricos(fechaInicio,fechaFin)
    .pipe(map(resp => resp.op_cur_pagos))
    .subscribe(resp => {
      this.dataSource = new MatTableDataSource<PagosHistoricoItems>(resp)
      this.dataSource.paginator = this.paginator
    }, (err)=> {
      console.error(err);
    })
  }
}
