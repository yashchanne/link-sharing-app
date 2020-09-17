import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Link } from '../models/links';
import { linksUrl } from '../appconfigvars';
import { User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addLink(link: Link): Observable<Link> {
    return this.httpClient.post<Link>(linksUrl, link);
  }

  getLinks(user: User): Observable<Link[]> {
    if (user.username === '') {
      return this.httpClient.get<Link[]>(linksUrl);
    }
    return this.httpClient.get<Link[]>(`${linksUrl}?username=${user.username}`);
  }

  editLink(link: Link, id: number): Observable<Link> {
    return this.httpClient.put<Link>(`${linksUrl}/${id}`, link);
  }

  deleteLink(id: number): Observable<any> {
    return this.httpClient.delete(`${linksUrl}/${id}`);
  }
}
