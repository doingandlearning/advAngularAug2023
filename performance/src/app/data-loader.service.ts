import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataLoaderService {
  private dataUrl = 'assets/users.json';
  constructor(private http: HttpClient) {}

  loadData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
