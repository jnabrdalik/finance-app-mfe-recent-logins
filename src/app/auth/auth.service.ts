import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(
    !!localStorage.getItem('token')
  );
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post<any>(`${environment.apiUrl}/login`, {
        username,
        password,
      })
      .pipe(
        tap((response) => {
          const token = response.token;
          localStorage.setItem('token', token);
          this.isLoggedIn.next(true);
        }),
        map(() => true),
        catchError(() => of(false))
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }
}
