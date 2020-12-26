import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { Factura } from 'src/app/interfaces/factura.interface';
import { ResidenteService } from 'src/app/services/residente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  dataSource: MatTableDataSource<Factura>;
  fileToUpload: File = null;
  selection = new SelectionModel<Factura>(false, []);
  idx = null
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = [
    'select',
    'idFactura', 
    'fecMesFactura',
    'nombreresidente',
    'documentoResidente', 
    'estado',
    'valAdministracion',
    'cuotaExtra',
    'facDescuento',
    'facRecargo',
    'total'];

  constructor(private residenteService: ResidenteService) { }

  ngOnInit(): void {
    this.getFacturasResidente()
  }

  manejadorArchivoInput(archivos: FileList) {
    this.fileToUpload = archivos.item(0);
    console.log(this.fileToUpload.name)
  }

  actualizarCheckedList(row, idx) {
    this.selection.toggle(row);
    this.idx = idx;
  }
  generarPago() {
    this.residenteService.generarPago(this.selection.selected, this.fileToUpload)
    .subscribe(resp => {
      this.dataSource.data.splice(this.idx, 1)
      this.dataSource.data = [...this.dataSource.data]
      this.idx = null
      this.fileToUpload = null
      Swal.fire(`Su factura esta en proceso de verificacion: Pago No ${resp}`)
    }, (err) => {
      console.log(err)
    })
  }


  getFacturasResidente() {
    this.residenteService.getFacturas()
    .subscribe(resp => {

      this.dataSource = new MatTableDataSource<Factura>(resp);
      this.dataSource.paginator = this.paginator;
    }, (err) => {
     console.error(err)
    })
  }

}
