import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}
  // Dictionary Type // Dicts

  store: { [hash: string]: any } = {};

  getWeather(
    {
      city,
      country,
      units,
    }: { city?: string; country?: string; units?: string } = {
      city: "London",
      country: "UK",
      units: "metric",
    }
  ) {
    const hash = `${city}${country}${units}`;
    if (hash in this.store) {
      console.log(this.store[hash].timestamp);
      return new Observable((subscriber) => subscriber.next(this.store[hash]));
    }

    return this.http.get<any>(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1${
        units === "metric" ? "&units=metric" : ""
      }`
    );
  }

  addToStore(hash: string, data: any) {
    this.store[hash] = data;
  }

  clearStore() {
    this.store = {};
  }
}
