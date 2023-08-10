import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { clearEntries } from '../cart-state-store/cart.actions';
import { selectWholeCart } from '../cart-state-store/cart.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cartEntries$: Observable<any>;

  constructor(private store: Store) {
    this.cartEntries$ = this.store.select(selectWholeCart);
  }

  ngOnInit(): void {}

  clearEntries() {
    this.store.dispatch(clearEntries());
  }

  addToCart(entry: any) {}

  removeFromCart(entry: any) {}
}
