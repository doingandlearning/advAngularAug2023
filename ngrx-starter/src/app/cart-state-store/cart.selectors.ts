import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state.reduce((total, currentValue) => {
      return total + currentValue.price;
    }, 0);
  }
);
export const selectWholeCart = createSelector(
  createFeatureSelector<Product[]>('cartEntries'),
  (state: Product[]): { product: Product; count: number }[] => {
    const productCountMap: Map<string, { product: Product; count: number }> =
      new Map();

    state.forEach((product) => {
      if (productCountMap.has(product.name)) {
        // If product exists in our map, increment its count
        const existingProductCount = productCountMap.get(product.name);
        if (existingProductCount) {
          existingProductCount.count += 1;
          productCountMap.set(product.name, existingProductCount);
        }
      } else {
        // If product doesn't exist in our map, add it with count 1
        productCountMap.set(product.name, { product, count: 1 });
      }
    });

    // Convert Map to an array
    return Array.from(productCountMap.values());
  }
);
