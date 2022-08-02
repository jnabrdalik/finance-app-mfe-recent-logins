import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth-guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./recent-logins.module').then((m) => m.RecentLoginsModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
