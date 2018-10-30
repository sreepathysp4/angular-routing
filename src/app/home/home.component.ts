import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMenuStatus = false;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {}

  showMenu() {
    this.showMenuStatus = true;
  }

  logoutAction() {
    if (this.authService.logout()) {
      this.router.navigate(['login']);
    }
  }
}
