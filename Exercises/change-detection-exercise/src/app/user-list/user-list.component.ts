import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Output() userSelected = new EventEmitter<User>();

  users: User[] = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 35 },
    // ... add more sample users
  ];

  onSelect(user: User) {
    this.userSelected.emit(user);
  }
}
