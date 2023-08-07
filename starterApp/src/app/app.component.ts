import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'starterApp';
  name = 'Kevin';
  chocRating = 3;

  handleChange(event: number) {
    this.chocRating = event;
  }
}