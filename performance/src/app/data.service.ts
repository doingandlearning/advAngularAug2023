import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  fetchData() {
    // return http.get()
    return of({ message: 'Hello from data service!' }).pipe(delay(2000));
  }
}
