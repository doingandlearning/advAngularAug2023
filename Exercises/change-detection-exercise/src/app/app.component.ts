import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'change-detection-exercise';
  selectedUser: User = { name: '', age: 0, id: 0 };

  handleUpdate(event: User) {
    this.selectedUser.name = event.name;
    this.selectedUser.age = event.age;
    this.selectedUser.id = event.id;
  }
}
