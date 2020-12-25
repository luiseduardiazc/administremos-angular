import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  public loginForm = this.fb.group({
    documento: [ '' , [ Validators.required, Validators.maxLength(12)]],
    pass: ['', Validators.required ],
  });

  
  
  constructor (private authService: AuthService,
               private router: Router,
               private fb: FormBuilder) {
  }

  ngOnInit (): void {}

  login() {
    this.authService.login( this.loginForm.value )
      .subscribe( resp => {
        // Navegar al Dashboard
        this.router.navigateByUrl('/');
        
      }, (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.errorMessage, 'error' );
      });
  }


}
