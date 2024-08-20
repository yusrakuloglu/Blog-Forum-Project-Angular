import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isHomePage: boolean | undefined;
  isLoginOrNewUserPage: boolean = false;
  constructor(
    public userService: UserService,
    private route: Router,
  ) {}
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      let str = localStorage.getItem('user');
      if (str != null) {
        this.userService.user = JSON.parse(str);
      } else {
        this.route.navigateByUrl('/login');
      }
    }
    this.route.events.subscribe((event) => {
      this.route.events.subscribe(() => {
        const currentUrl = this.route.url;
        this.isHomePage = currentUrl === '/home';
        this.isLoginOrNewUserPage =
          currentUrl === '/login' || currentUrl === '/newuser';
      });
    });
  }

  logout() {
    this.userService.user = undefined;
    this.route.navigateByUrl('/home');
  }
  loginOrOptions() {
    this.userService.user != undefined
      ? this.route.navigateByUrl('/options')
      : this.route.navigateByUrl('/login');
  }
}
