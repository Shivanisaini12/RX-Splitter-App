import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //---LoginForm---//
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
  });

  loginSubmitted() {}

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  //---RegisterForm---//
  registerForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),

    EmailId: new FormControl('', [Validators.required, Validators.email]),

    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
  });

  registeredSubmit() {}

  get fullName(): FormControl {
    return this.registerForm.get('fullName') as FormControl;
  }

  get EmailId(): FormControl {
    return this.registerForm.get('EmailId') as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get('Password') as FormControl;
  }
}
