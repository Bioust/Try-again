import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user : User;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName :  new FormControl(null,Validators.required),
    //   email : new FormControl(null, [Validators.required,Validators.email]),
    //   password : new FormControl(null, [Validators.required,Validators.minLength(8)]),
    //   confirmPassword : new FormControl(null, Validators.required),
    //   mobile : new FormControl(null, [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^\d{10}$/)]),
    // }, this.passwordMatching);
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm  = this.fb.group({
      userName :  [null,Validators.required],
      email : [null, [Validators.required,Validators.email]],
      password : [null, [Validators.required,Validators.minLength(8)]],
      confirmPassword : [null, Validators.required],
      mobile : [null, [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^\d{10}$/)]],    
    }, {Validators : this.passwordMatching});
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get userPassword() {
    return this.registrationForm.get('password') as FormControl;
  }
  get userConfirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get userEmail() {
    return this.registrationForm.get('email') as FormControl;
  }
  get userMobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }


passwordMatching: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');
  
  if (!passwordControl || !confirmPasswordControl) {
    return null;
  }

  return passwordControl.value === confirmPasswordControl.value ? null : { notMatched: true };
};

userData() : User {
  return this.user = {
    userName : this.userName.value,
    email : this.userEmail.value,
    password : this.userPassword.value,
    mobile : this.userMobile.value
  }
}


  onSubmit() {
    this.submitted = true;
    if(this.registrationForm.valid) {
      this.submitted = false;
      // this.user = Object.assign(this.registrationForm.value, this.user);
      // Using Object.assign we assign value of one object to other
      this.userService.addUsers(this.userData());
      this.registrationForm.reset();
      this.alertifyService.sucess('Sucessfully Registered');
    } else {
      this.alertifyService.warning('Error! Please Try Again')
    }
  }

  
  

}
