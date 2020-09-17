import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Link } from '../models/links';
import { selectLinks } from '../selectors/links.selector';
import { Observable } from 'rxjs';
import * as linksActions from '../actions/links.actions';
import { User } from '../models/users';
import { selectUser } from '../selectors/users.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<Link[]> = this.store.select(selectLinks);
  loggedUser: User;

  formPopupBookName = '';
  formPopupBookLink = '';
  formPopupBookDescription = '';
  formPopupBookCategory = '';
  formPopupBookId = 0;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(result => {
      this.loggedUser = result;
      this.store.dispatch(linksActions.getLinks({ user: this.loggedUser }));
    });
  }

  addLink(): void {
    const link: Link = {
      username: this.loggedUser.username,
      link: this.formPopupBookLink,
      title: this.formPopupBookName,
      description: this.formPopupBookDescription,
      category: this.formPopupBookCategory
    };

    this.store.dispatch(linksActions.addLink({ link }));

    alert('Product added successfully!');
    this.closeAddProductForm();
  }

  editLink(): void {
    const link: Link = {
      username: this.loggedUser.username,
      link: this.formPopupBookLink,
      title: this.formPopupBookName,
      description: this.formPopupBookDescription,
      category: this.formPopupBookCategory
    };

    this.store.dispatch(linksActions.editLink({ link, id: this.formPopupBookId }));

    alert('Product updated successfully!');
    this.closeEditProductForm();
  }

  deleteLink(id: number): void {
    if (confirm('Are you sure to delete this book?')) {
      this.store.dispatch(linksActions.deleteLink({ id }));
    }
  }

  openAddProductForm(): void {
    document.getElementById('add-product-form').style.display = 'block';
  }

  closeAddProductForm(): void {
    document.getElementById('add-product-form').style.display = 'none';
    this.resetFormPopup();
  }

  openEditProductForm(id: number): void {
    this.formPopupBookId = id;
    document.getElementById('edit-product-form').style.display = 'block';
  }

  closeEditProductForm(): void {
    document.getElementById('edit-product-form').style.display = 'none';
    this.resetFormPopup();
  }

  resetFormPopup(): void {
    this.formPopupBookName = '';
    this.formPopupBookLink = '';
    this.formPopupBookDescription = '';
    this.formPopupBookCategory = '';
    this.formPopupBookId = 0;
  }
}
