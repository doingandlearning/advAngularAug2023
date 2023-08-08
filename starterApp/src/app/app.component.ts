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

  initialState: boolean = false;
  totalToggles: number = 0;

  onStateChanged(newState: boolean) {
    this.totalToggles++;
    console.log('Switch state changed to:', newState);
  }

  resetSwitch() {
    this.initialState = false;
    this.totalToggles = 0;
  }

  handleChange(event: number) {
    this.chocRating = event;
  }
}
