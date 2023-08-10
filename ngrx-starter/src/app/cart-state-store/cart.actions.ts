import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const addProduct = createAction('ADD_PRODUCT', props<Product>());
export const clearEntries = createAction('CLEAR_ENTRIES');
