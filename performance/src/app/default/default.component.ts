import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent {
  time: number = 0;
  data: any;

  constructor(private dataService: DataService) {
    setInterval(() => {
      this.time++;
      console.log('Default Timer: ', this.time);
    }, 1000);
  }

  ngOnInit() {
    this.dataService
      .fetchData()
      .subscribe((response) => (this.data = response));
  }
}
