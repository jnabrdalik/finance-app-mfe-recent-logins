import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  loginForm = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  });

  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.subscription = this.authService
      .login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe((success) => {
        if (success) {
          this.router.navigate(['']);
        } else {
          console.log('Błąd logowania');
        }
      });
  }
}
