import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Link } from '../models/links';
import { User } from '../models/users';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() link: Link;
  @Input() loggedUser: User;

  @Output() deleteEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteEvent(): void {
    this.deleteEvent.emit();
  }

  emitEditEvent(): void {
    this.editEvent.emit();
  }
}
