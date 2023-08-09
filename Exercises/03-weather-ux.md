
## Lab: Building a Simple Weather App with Angular

### Introduction:
Develop a user-friendly weather application that fetches data from an external API using just basic Angular concepts and `ngModel`. This app will help you grasp the basics of data binding, component communication, and simple HTTP requests.

### Objectives:
- Capture user input using `ngModel` or FormControl
- Make HTTP requests to fetch data.
- Display the fetched data.

---

### Part 1: Setting Up the User Input

1. If starting from an existing project, ensure it's set up. If not, create a new Angular application.
2. Create a new component `WeatherDisplayComponent`.
3. Design two input fields for 'city' and 'country' and use `ngModel` to bind their values to component properties.
4. Add a button labeled "Get Weather".

---

### Part 2: Fetching Weather Data

> We need to ask the user for 'city' and 'country' values, then fetch a weather report from

> http://api.openweathermap.org/data/2.5/weather?q=chennai,in&APPID=48f2d5e18b0d2bc50519b58cce6409f1&units=metric

> (Replace sofia, bg with city and country as entered by the user)

> From the returned JSON, decide what you will show description and temperature e.g. myWeatherClassInstance.weatherDescription = this.weatherReport.weather[0].description

> Write the http call in a service which is invoked when the user clicks a button When the app first loads, make a request using sensible defaults

1. Generate a service called `WeatherService`.
2. In this service, create a method `fetchWeather(city: string, country: string)` that makes an HTTP call to the OpenWeatherMap API.
3. Since we haven't delved deep into error handling, just console.log any errors for now.
4. In `WeatherDisplayComponent`, bind the button's click event to a method that invokes `WeatherService.fetchWeather()`.
5. Display the fetched weather description and temperature in the component.

---

### Part 3: Enhancements and Optional Features

1. **Default Data**:
   - When the application loads, automatically fetch weather data for a default city and country.

2. **Display More Weather Information**:
   - Show additional details from the fetched data, like humidity or wind speed.

---

### If time permits challenges:


1. **UI Enhancements**:
   - Incorporate a skeleton UI when data is being fetched to improve user experience.
   - Style the application for a more polished look. 
   - Ensure the application is styled consistently and looks polished.

2. **Accessibility**:
   - Ensure all elements are accessible, using ARIA attributes where necessary.
   - Ensure the color contrast is sufficient for readability and conforms to WCAG standards.

3. **LocalStorage Integration**:
   - After a user fetches data for a city and country, save these values to `localStorage`.
   - When the application loads, check `localStorage` and auto-populate the input fields with the saved values.

4. **Simple Error Feedback**:
   - If the API call fails (e.g., if an invalid city/country combination is entered), display a simple error message to the user.

---

### Conclusion:
By the end of this lab, you'll have built a functional weather application using fundamental Angular concepts. This experience will serve as a foundation, allowing you to dive deeper into more complex Angular topics in the future. Remember, mastering the basics is the first step towards becoming proficient in Angular development!

