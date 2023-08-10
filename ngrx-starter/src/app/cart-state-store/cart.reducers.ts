import { createReducer, on } from '@ngrx/store';
import { Product } from '../product';
import { addProduct, clearEntries } from './cart.actions';

export const initialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  initialCartEntries,
  on(addProduct, (state, product) => {
    const newState = structuredClone(state);
    newState.push(product);
    return newState;
  }),
  on(clearEntries, (state) => {
    return [];
  })
);
