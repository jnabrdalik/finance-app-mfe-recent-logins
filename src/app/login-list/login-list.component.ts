import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss'],
})
export class LoginListComponent implements OnInit {
  displayedColumns = ['datetime', 'userAgent', 'success'];
  logins$ = this.loginService.getRecentLogins();

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
}
