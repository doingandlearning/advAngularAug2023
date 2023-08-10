import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor() {
    this.countProducts$ = new Observable((sub) => sub.next(0));
    this.totalPrice$ = new Observable((sub) => sub.next(0));
  }

  handleClearCart() {}
}
