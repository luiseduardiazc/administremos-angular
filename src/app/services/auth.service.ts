import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
   }

   login( formData: LoginForm ) {

    const httpHeaders: HttpHeaders = new HttpHeaders({
      Anonymous: ''
  });

    return this.http.post(`${ base_url }/usuario/login`, formData, { headers: httpHeaders } )
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
}
