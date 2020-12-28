import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { map } from 'rxjs/operators'
import { OrdenTrabajoItems } from 'src/app/interfaces/ordentrabajo.interface'
import { ValidarPago } from 'src/app/models/validarpago.model'
import { EmpleadoService } from 'src/app/services/empleado.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-validacion-pagos',
  templateUrl: './validacion-pagos.component.html',
  styleUrls: ['./validacion-pagos.component.css']
})
export class ValidacionPagosComponent implements OnInit {
  constructor (private empleadoService: EmpleadoService) {}

  dataSource: MatTableDataSource<OrdenTrabajoItems>
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  displayedColumns: string[] = [
    'idpago',
    'idfactura',
    'fechamesfactura',
    'identificacion',
    'nombre',
    'estado',
    'valadministracion',
    'cuotaextra',
    'porcentajedescuento',
    'porcentajerecargo',
    'valortotal',
    'descargar',
    'validar'
  ]

  ngOnInit (): void {
    this.getOrdenesTrabajo()
  }

  getOrdenesTrabajo () {
    this.empleadoService
      .getOrdenesTrabajo()
      .pipe(map(resp => resp.op_cur_ordenes_pendientes))
      .subscribe(
        resp => {
          this.dataSource = new MatTableDataSource<OrdenTrabajoItems>(resp)
          this.dataSource.paginator = this.paginator
        },
        err => {
          console.error(err)
        }
      )
  }

  descargarArchivoUrl (url: string) {
    if (url != '' && url != undefined) {
      window.open(url, '_blank')
    }
  }

  validarPago (row: OrdenTrabajoItems, idx: Number) {
    const pago: ValidarPago = new ValidarPago()
    pago.idFactura = Number(row.IDFACTURA)
    pago.idPago = Number(row.IDPAGO)
    pago.idOrdenTrab = Number(row.IDORDENTRAB)

    Swal.fire({
      title: 'Esta seguro de guardar los cambios ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Aprobar Pago`,
      denyButtonText: `Rechazar Pago`
    }).then(result => {
      if (result.isConfirmed) {
        this.aprobarPago(pago, idx)
      } else if (result.isDenied) {
        this.rechazarPago(pago, idx)
      }
    })
  }

  aprobarPago (pago: ValidarPago, idx: Number) {
    this.empleadoService.aprobarPago(pago).subscribe(
      resp => {
        Swal.fire('Procesado!', `${resp.op_mensaje}`, 'success')
        this.eliminarFilaDatasource(idx)
      },
      err => {
        this.error()
        console.error(err)
      }
    )
  }

  rechazarPago (pago: ValidarPago, idx: Number) {
    this.empleadoService.rechazarPago(pago).subscribe(
      resp => {
        Swal.fire('Procesado!', `${resp.op_mensaje}`, 'success')
        this.eliminarFilaDatasource(idx)
      },
      err => {
        this.error()
        console.error(err)
      }
    )
  }

  eliminarFilaDatasource (idx: Number) {
    this.dataSource.data.splice(idx.valueOf(), 1)
    this.dataSource.data = [...this.dataSource.data]
  }


  error() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo Salio mal!',
      footer: ''
    })
  }
}
