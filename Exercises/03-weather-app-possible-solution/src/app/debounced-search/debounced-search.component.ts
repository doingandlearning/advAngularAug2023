import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from "rxjs";
import { WikipediaService } from "../wiki-service.service";

@Component({
  selector: "app-debounced-search",
  templateUrl: "./debounced-search.component.html",
  styleUrls: ["./debounced-search.component.css"],
})
export class DebouncedSearchComponent {
  searchControl = new FormControl();
  results$: Observable<any> = new Observable();

  constructor(private apiService: WikipediaService) {}

  ngOnInit(): void {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.apiService.queryApi(searchTerm))
    );
  }
}
