import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { tap } from "rxjs/operators";
import { WeatherServiceService } from "../weather-service.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  cityField = new FormControl("Belfast");
  countryField = new FormControl("UK");
  unitsField = new FormControl();
  results$: Observable<any> = new Observable();
  isLoading = false;
  imgSrc = "";

  constructor(
    private weatherService: WeatherServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cityField.setValue(
      this.route.snapshot.paramMap.get("city") || "Chennai"
    );
    this.countryField.setValue(
      this.route.snapshot.paramMap.get("country") || "India"
    );
    this.getWeather();
  }

  getWeather() {
    const city = this.cityField.value;
    const country = this.countryField.value;
    const units = this.unitsField.value || "metric";

    if (!city || !country) {
      return;
    }

    this.isLoading = true;

    this.results$ = this.weatherService
      .getWeather({
        city,
        country,
        units,
      })
      .pipe(
        tap((data) => {
          this.isLoading = false;

          console.log(data);
          this.imgSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
      );
  }
}
