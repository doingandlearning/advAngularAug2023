**Angular Change Detection Lab**

### Overview

In this lab, you'll create a simple application that showcases different change detection mechanisms in Angular. The goal is to understand how change detection works, when it gets triggered, and how to optimize it using different strategies.

### Application Description

You'll be building a "User Dashboard" where:

1. A user list is displayed.
2. The user can update the details of these users.
3. The user can view the details of these users in a separate component.

### Steps

**1. Setup**

Initialize a new Angular project using Angular CLI.

```bash
ng new change-detection-lab
cd change-detection-lab
```

**2. Create Components**

- Create two components: `UserList` and `UserDetails`.
  
```bash
ng generate component UserList
ng generate component UserDetails
```

**3. UserList Component**

- This component will display a list of users.
- Implement a button next to each user that says "View Details". When clicked, this button will display that user's details in the `UserDetails` component.

**4. UserDetails Component**

- This component will display the details of a selected user.
- Implement an "Update Name" button that, when clicked, updates the name of the user.

**5. Implement Default Change Detection**

- Bind the user data to both components and notice that any change in one component reflects immediately in another because of Angular's default change detection.

**6. Introduce `ChangeDetectionStrategy.OnPush`**

- Update the `UserDetails` component to use `OnPush` change detection.
- Notice that now, when you update the user's name in the `UserDetails` component, it doesn't immediately reflect in the `UserList` component.

**7. Manual Triggering**

- Use the `ChangeDetectorRef` in the `UserDetails` component to manually check for updates when the user's name is updated.

**8. Observable Data Streams**

- Replace the user data with an observable stream of data.
- Use the `async` pipe to automatically update the view when new data emits. This works in tandem with `OnPush`, allowing the component to react to new data from the observable.

**9. Implement `ngOnChanges` Hook**

- Use the `ngOnChanges` lifecycle hook in `UserDetails` to log whenever the input user data changes. This will give a deeper understanding of how often change detection runs and how data changes are detected.

### Bonus Tasks:

1. **Lifecycle Hooks**: Implement different lifecycle hooks like `ngOnInit`, `ngDoCheck`, etc., and use `console.log` to notice the order in which they are called and understand their frequency.

2. **Promises vs. Observables**: Instead of an observable data stream, fetch user data using a Promise and notice the difference in how change detection operates.

### Conclusion:

By the end of this lab, you'll have hands-on experience with:

1. Default change detection mechanisms in Angular.
2. Optimizing change detection using `ChangeDetectionStrategy.OnPush`.
3. Manual triggering of change detection.
4. Observables in conjunction with change detection.

Remember to review the Angular documentation on change detection and related concepts to deepen your understanding.

---

## Hints and Starter Code

**1. User Model**

First, let's create a simple user model.

**src/app/user.model.ts**

```typescript
export interface User {
  id: number;
  name: string;
  age: number;
}
```

**2. UserList Component**

This component will showcase a list of users and allow you to select one to view its details.

**src/app/user-list/user-list.component.ts**

```typescript
import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
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
```

**src/app/user-list/user-list.component.html**

```html
<ul>
  <li *ngFor="let user of users" (click)="onSelect(user)">
    {{ user.name }}
  </li>
</ul>
```

**3. UserDetails Component**

This component will showcase the details of a selected user and offer an option to change the user's name.

**src/app/user-details/user-details.component.ts**

```typescript
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  @Input() user: User;

  updateName(newName: string) {
    this.user.name = newName;
    // NOTE: When you're dealing with OnPush strategy, 
    // changes like above might not reflect immediately.
    // Students will need to figure out how to make this change detected.
  }
}
```

**src/app/user-details/user-details.component.html**

```html
<div *ngIf="user">
  <p>Name: {{ user.name }}</p>
  <p>Age: {{ user.age }}</p>
  
  <!-- Button to simulate updating the user's name -->
  <button (click)="updateName('UpdatedName')">Update Name</button>
</div>
```

**4. App Component**

To bind everything together:

**src/app/app.component.html**

```html
<app-user-list (userSelected)="selectedUser = $event"></app-user-list>
<app-user-details [user]="selectedUser"></app-user-details>
```

**src/app/app.component.ts**

```typescript
import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUser: User;
}
```

**Comments & Instructions:**

- The `UserListComponent` initializes with a list of users. Clicking on a user emits the user's data to its parent component.
- The `UserDetailsComponent` displays a selected user's data. It also contains a method to update the name, but with the `OnPush` change detection strategy, this change won't reflect immediately in the list. This is something students need to figure out and handle.
- The `AppComponent` binds both components together, showing the selected user's details once a user is clicked in the list.
