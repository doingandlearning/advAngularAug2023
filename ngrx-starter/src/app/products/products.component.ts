import { Component } from '@angular/core';
import { Product } from '../product';

export const PRODUCTS = [
  {
    id: 1,
    name: 'Super Robot 2k',
    description: 'With Laser Guns!',
    price: 40.99,
    image: 'assets/products/robot.png',
  },
  {
    id: 2,
    name: 'Lucky Board Game',
    description: 'Up to 4 players!',
    price: 35.0,
    image: 'assets/products/board_game.png',
  },
  {
    id: 3,
    name: 'The Art of Videogames',
    description: 'Retro Edition. From more than 20 Artists!',
    price: 21.15,
    image: 'assets/products/book.png',
  },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor() {}

  public products(): Product[] {
    return PRODUCTS;
  }

  public buyProduct(product: Product) {}
}
