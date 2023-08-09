import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WikipediaService {
  private wikipediaApiUrl = "https://en.wikipedia.org/w/api.php";

  constructor(private httpClient: HttpClient) {}

  queryApi(searchTerm: string): Observable<any> {
    const params = {
      action: "query",
      list: "search",
      format: "json",
      srsearch: searchTerm,
      origin: "*",
    };

    return this.httpClient.get<any>(this.wikipediaApiUrl, { params });
  }
}
