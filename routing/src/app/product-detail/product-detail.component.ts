import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  productId: string = 'Test';
  product$: Observable<any> = new Observable();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // This uses the data to do something else ...
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.productId = String(params.get('id'));
        // Call out to an API
        return new Observable();
      })
    );

    // This just gets that data from the route!
    this.productId = String(this.route.snapshot.paramMap.get('id'));
  }
}
