import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { WikipediaService } from '../services/wikipedia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-debouncing-input',
  templateUrl: './debouncing-input.component.html',
  styleUrls: ['./debouncing-input.component.css'],
})
export class DebouncingInputComponent {
  searchField = new FormControl();
  results$: Observable<any> = new Observable();
  isLoading = false;

  constructor(private wiki: WikipediaService) {
    this.searchField.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => (this.isLoading = true))
      )
      .subscribe((query) => {
        this.results$ = this.wiki
          .queryApi(query)
          .pipe(tap(() => (this.isLoading = false)));
      });
  }
}
