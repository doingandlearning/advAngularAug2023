import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart-state-store/cart.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductsComponent,
    HeaderComponent,
  ],
  imports: [pro
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cartEntries: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
