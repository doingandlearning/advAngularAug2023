import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DebouncedSearchComponent } from "./debounced-search/debounced-search.component";
import { HarnessComponent } from "./harness/harness.component";
import { HomeComponent } from "./home/home.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "harness", component: HarnessComponent },
  { path: "weather", component: WeatherComponent },
  { path: "wiki", component: DebouncedSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
