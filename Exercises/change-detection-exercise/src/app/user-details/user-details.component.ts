import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  @Input() user: User = { name: '', id: 0, age: 0 };

  updateName(newName: string) {
    this.user.name = newName;
    // NOTE: When you're dealing with OnPush strategy,
    // changes like above might not reflect immediately.
    // Students will need to figure out how to make this change detected.
  }
}
