**Angular Weather API Lab with Routing and Guards**

### Objective:
Extend a basic weather API application to implement Angular routing and guards, ensuring a smooth transition between pages and secure route activations.

### Requirements:
- Angular CLI
- A basic weather API service (can use OpenWeatherMap or similar)

You can either extend the application solution application that I provide or your own from the end of yesterday's lab.

### Tasks:

1. **Parameterized Routes:**

   In `app-routing.module.ts`, set up parameterized routes:
   ```typescript
   const routes: Routes = [
     { path: 'weather/:city/:country', component: WeatherComponent },
     { path: '', redirectTo: '/weather/London/UK', pathMatch: 'full' }
   ];
   ```

   This will allow you to navigate to `/weather/London/UK` and fetch weather for London, UK.

2. **Create Route Guard:**

   Generate the guard:
   ```bash
   ng generate guard authToken
   ```

   In `auth-token.guard.ts`, implement the guard logic to check for a `token` query parameter:
   ```typescript
   canActivate(route: ActivatedRouteSnapshot): boolean {
     const token = route.queryParams['token'];
     return !!token;
   }
   ```

   Modify the route in `app-routing.module.ts` to use this guard:
   ```typescript
   { 
     path: 'weather/:city/:country', 
     component: WeatherComponent, 
     canActivate: [AuthTokenGuard]
   }
   ```

3. **Implement WeatherComponent Logic:**

   In `weather.component.ts`:
   - Inject `ActivatedRoute` to access route parameters.
   - Fetch the city and country from the route parameters.
   - Fetch weather data using the service.

   ```typescript
   ngOnInit(): void {
     this.route.params.subscribe(params => {
       this.city = params['city'];
       this.country = params['country'];
       this.fetchWeatherData(this.city, this.country);
     });
   }
   ```

4. **WeatherComponent Template:**

   Display the fetched weather data.

5. **Navigate with Token:**

   Create another component (e.g., `HomeComponent`) with links to different cities/countries. Use the Angular `routerLink` directive, ensuring that the `token` query parameter is included, e.g.:
   
   ```html
   <a [routerLink]="['/weather/London/UK']" [queryParams]="{token: 'YOUR_TOKEN'}">London Weather</a>
   ```

### Test:

1. Navigate to the root path. It should redirect you to `/weather/London/UK` with London's weather (assuming you've provided a valid token in the URL).
2. Try navigating to `/weather/Paris/France?token=YOUR_TOKEN`. This should fetch and display Paris's weather.
3. Navigate without the token (`/weather/Paris/France`). The route guard should prevent you from accessing the route.

### Conclusion:

By the end of this lab, you will have integrated the Angular Router into a basic weather API application, added parameterized routing, and implemented route guards to secure route activations. This extends the app's functionality, ensuring a more interactive and safe user experience.