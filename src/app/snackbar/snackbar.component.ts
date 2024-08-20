import { Component } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css',
})
export class SnackbarComponent {
  isVisible = false;
  message = '';

  showSnackbar(message: string) {
    this.message = message;
    this.isVisible = true;
  }

  closeSnackbar() {
    this.isVisible = false;
  }
}
