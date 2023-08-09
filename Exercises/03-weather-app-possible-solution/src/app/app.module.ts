import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DataComponent } from "./data/data.component";
import { HarnessComponent } from "./harness/harness.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WeatherComponent } from "./weather/weather.component";
import { HttpClientModule } from "@angular/common/http";
import { DebouncedSearchComponent } from "./debounced-search/debounced-search.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    HarnessComponent,
    WeatherComponent,
    DebouncedSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
