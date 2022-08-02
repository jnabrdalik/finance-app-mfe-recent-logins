import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecentLogin } from './model/recent-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getRecentLogins(): Observable<RecentLogin[]> {
    return this.http
      .get<RecentLogin[]>(`${environment.apiUrl}/logins`)
      .pipe(
        map((logins) =>
          logins.sort((a, b) => b.datetime.localeCompare(a.datetime))
        )
      );
  }
}
