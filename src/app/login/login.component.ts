import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router,
  ) {}
  @ViewChild(SnackbarComponent) snackbar?: SnackbarComponent;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });
  //Abstract control'ü miras aldığımız için controlleri kendimiz düzenleyebiliriz.
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    this.userService.getEmail(this.loginForm.value.email).subscribe((res) => {
      console.log(res);
      if (res.length == 0) {
        this.snackbar?.showSnackbar('No such user found ');
      } else {
        if (res[0].password == this.loginForm.value.password) {
          this.userService.user = res[0];
          // burda user adlı değişkene ben objemdeki girilen bilgileri atıyorum.
          localStorage.setItem('user', JSON.stringify(res[0]));
          this.route.navigateByUrl('options');
        }
        if (
          this.loginForm.value.email == '' &&
          this.loginForm.value.password == ''
        ) {
          this.snackbar?.showSnackbar('Please enter email and password');
        } else {
          this.snackbar?.showSnackbar('Password is incorrect');
        }
      }
    });
  }
  togglePasword() {
    this.showPassword = !this.showPassword;
  }
}
