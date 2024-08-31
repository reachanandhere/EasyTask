import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EasyTask';
  users = DUMMY_USERS;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }

  selectedUserId?: string;

  onSelectUser(userId: string) {
    this.selectedUserId = userId;
  }
}
