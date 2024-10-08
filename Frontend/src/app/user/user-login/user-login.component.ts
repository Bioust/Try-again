import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm);
    const token = this.authenticationService.authUser(loginForm.value);
    if(token) {
      localStorage.setItem('token',token.userName);
      this.alertify.sucess('Logged In Sucessfully');
      this.router.navigate(['/'])
    } else {
      this.alertify.warning('Invaid Login Details Please Try again');
    }
  }

}
