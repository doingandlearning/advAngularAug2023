import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DebouncedSearchComponent } from "./debounced-search/debounced-search.component";
import { HarnessComponent } from "./harness/harness.component";
import { HomeComponent } from "./home/home.component";
import { WeatherComponent } from "./weather/weather.component";
import { AuthTokenGuard } from "./auth-token.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "weather", component: WeatherComponent },
  {
    path: "weather/:city/:country",
    component: WeatherComponent,
    canActivate: [AuthTokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
