import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SensitiveDataService {
  data = 'Sensitive Data';

  constructor() {}

  getData() {
    return this.data;
  }
}
