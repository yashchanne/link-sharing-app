import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersUrl } from '../appconfigvars';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addUser(user: any): any {
    return this.httpClient.post(usersUrl, user).subscribe();
  }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(usersUrl);
  }
}
