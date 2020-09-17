import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as userActions from '../actions/users.actions';
import { User } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  cpassword: string;

  isLoginIntended = true;

  constructor(
    private loginService: LoginService,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {}

  validateLogin(): void {
    this.loginService.getUsers().subscribe(data => {
      for (const userObj of data) {
        if (userObj.username === this.username && userObj.password === this.password) {
          const user: User = { username: userObj.username, id: userObj.id };
          this.store.dispatch(userActions.storeUser({ user }));

          localStorage.setItem('user', JSON.stringify(user));

          alert('Logged in successfully!');
          this.router.navigateByUrl('/');
          return;
        }
      }
      alert('Invalid username or password!');
    });
  }

  validateSignup(): void {
    if (this.password !== this.cpassword) {
      alert('passwords do not match!');
      this.cpassword = '';
    }
    else{
      if (this.loginService.addUser({ username: this.username, password: this.password })) {
        alert('User registered successfully!');
        this.username = '';
        this.password = '';
        this.cpassword = '';
        this.router.navigateByUrl('/');
      }
      else {
        alert('User registration failed!');
        this.router.navigateByUrl('/');
      }
    }
  }

  toggleIsLoginIntended(): void {
    this.isLoginIntended = (this.isLoginIntended) ? false : true;
  }
}
