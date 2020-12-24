import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { tap} from 'rxjs/operators';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
   }

   login( formData: LoginForm ) {
    return this.http.post(`${ base_url }/usuario/login`, formData )
    .pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token )
      })
    );
   }

   validarToken() {
    const token = localStorage.getItem('token') || '';
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`
  });
      return this.http.post(`${ base_url }/usuario/validartoken`,{}, {
       headers: httpHeaders
     })
   }
}
