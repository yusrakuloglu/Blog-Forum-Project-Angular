import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  showPassword: boolean = false;
  @ViewChild(SnackbarComponent) snackbar?: SnackbarComponent;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  createForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.createForm.controls;
  }

  createAccount() {
    this.userService.createUser(this.createForm.value).subscribe(
      (res) => {
        this.snackbar?.showSnackbar('Account created successfully!');
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error(error);
        this.snackbar?.showSnackbar(
          'Failed to create account. Please try again.',
        );
      },
    );
  }
  togglePasword() {
    this.showPassword = !this.showPassword;
  }
}
