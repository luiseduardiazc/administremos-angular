import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Usuario } from '../interfaces/usuario.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
   }

   login( formData: LoginForm ) {

    return this.http.post(`${ base_url }/usuario/login`, formData)
    .pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token )
      })
    );
   }

   validarToken(): Observable<boolean> {

      return this.http.post(`${ base_url }/usuario/validartoken`, {}).pipe(
       map(resp => true),
       catchError(error => of(false))
     )
   }

   logout() {
     localStorage.removeItem('token');
   }

   getUserInfo(): Usuario {
     const user = jwt_decode(localStorage.getItem('token'))
     const userInfo: Usuario = JSON.parse(JSON.stringify(user))
     return userInfo; 
   }
}
