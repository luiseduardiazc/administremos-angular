import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit  {

  public residenteModulo: Boolean = false
  public empleadoteModulo: Boolean = false
  public adminisModulo: Boolean = false
  public user: Usuario;

  constructor(private authService: AuthService, private router:Router) { }
  ngOnInit(): void {
    this.mapUsuarioRoles()
  }
  
  mapUsuarioRoles() {
    this.user = this.authService.getUserInfo()
    
    this.user.roles.forEach(element => {
      if (element.nombre === "RESIDENTE") {
        this.residenteModulo = true
      }
      if (element.nombre === "EMPLEADO") {
        this.empleadoteModulo = true
      }
      if (element.nombre === "ADMINISTRADOR_CONJUNTO") {
        this.adminisModulo = true
      }   
    });

  }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/login')
  }
}
