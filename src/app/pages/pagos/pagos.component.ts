import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { Factura } from 'src/app/interfaces/factura.interface';
import { ResidenteService } from 'src/app/services/residente.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor(private residenteService: ResidenteService) { }

  dataSource: MatTableDataSource<Factura>;
  fileToUpload: File = null;
  selection = new SelectionModel<Factura>(false, []);
  idx = null

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('userFile') inputUserFile: ElementRef;

  
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



  ngOnInit(): void {
    this.getFacturasResidente()
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


  manejadorArchivoInput(archivos: FileList) {
    this.fileToUpload = archivos.item(0);
  }

  actualizarCheckedList(row, idx) {
    this.selection.toggle(row);
    this.idx = idx;
    if(typeof this.inputUserFile !== 'undefined') {
      this.inputUserFile.nativeElement.value = null;
      this.fileToUpload = null;
    }
  }
  generarPago() {
    this.residenteService.generarPago(this.selection.selected, this.fileToUpload)
    .pipe(
      tap(_ => {
        this.inputUserFile.nativeElement.value = null;
        this.fileToUpload = null
        this.selection.selected.length = 0
      })
      )
    .subscribe(resp => {
      this.dataSource.data.splice(this.idx, 1)
      this.dataSource.data = [...this.dataSource.data]
      this.idx = null
      Swal.fire({
        icon: 'success',
        title: 'Pago',
        text: `Su factura esta en proceso de verificacion: Pago No ${resp}`
      })

    }, (err) => {
      console.log(err)
    }) 
  }

}
