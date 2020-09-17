import { Component, OnInit } from '@angular/core';
import { User } from './models/users';

import { Store } from '@ngrx/store';
import { selectUser } from './selectors/users.selector';
import { removeUser, storeUser } from './actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'book sharing app';
  appTheme = 'theme-dark';

  loggedUser: User;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    if (localStorage.user !== undefined) {
      this.store.dispatch(storeUser({ user: JSON.parse(localStorage.getItem('user')) }));
    }

    this.store.select(selectUser).subscribe(result => {
      this.loggedUser = result;
    });
  }

  toggleTheme(): void {
    this.appTheme = (this.appTheme === 'theme-dark') ? 'theme-light' : 'theme-dark';
  }

  logout(): void {
    this.store.dispatch(removeUser());
    localStorage.removeItem('user');
  }
}
