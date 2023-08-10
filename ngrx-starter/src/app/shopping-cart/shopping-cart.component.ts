import { Component } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cartEntries$: Observable<any>;

  constructor() {
    this.cartEntries$ = new Observable();
  }

  ngOnInit(): void {}

  clearEntries() {}

  addToCart(entry: any) {}

  removeFromCart(entry: any) {}
}
