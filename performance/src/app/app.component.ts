import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'performance';
  childData = { value: 3 };
  show = true;

  updateData() {
    this.childData = { value: this.childData.value + 1 };
  }

  toggleShow() {
    this.show = !this.show;
  }
}
