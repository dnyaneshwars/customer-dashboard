import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.min(6)]);
  constructor(private router : Router){
if(localStorage.getItem('isLoggedIn')){
  this.router.navigate(['dashboard']);
}
  }
  onSubmit(){
    localStorage.setItem('isLoggedIn','true')
    this.router.navigate(['dashboard']);
  }
}
