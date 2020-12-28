import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf'
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ResidenteService } from 'src/app/services/residente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pazysalvo',
  templateUrl: './pazysalvo.component.html',
  styleUrls: ['./pazysalvo.component.css']
})
export class PazysalvoComponent implements OnInit {

  public user: Usuario
  public currentDate: Date
  public pazysalvo: Boolean = false

  @ViewChild('htmlData') htmlData:ElementRef;
  
  constructor(private authService: AuthService, private residenteService: ResidenteService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserInfo()
    this.currentDate = new Date();
  }


  public comprobarPazySalvo() {
    this.residenteService.comprobarPazySalvo()
    .subscribe(
      (resp)=> {
        this.pazysalvo = resp
        if (!resp) {
          Swal.fire(
            'Upsss',
            'No pudimos generar el paz y salvo. Verifique que tiene pagos y que se encuentren al día',
            'question'
          )
        }
      }, (err) => {
        console.log(err)
      })
  }

  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc: jsPDF = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,50,30,{
      'width': 600,
      'height': 600,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }

}
