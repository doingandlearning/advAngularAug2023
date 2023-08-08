import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  people = [
    { id: 1, name: 'Ravi', value: 0 },
    { id: 2, name: 'Renuka', value: 0 },
    { id: 3, name: 'Manoj', value: 0 },
    { id: 4, name: 'Esthack', value: 0 },
  ];

  show = true;

  removeItem(itemId: number) {
    this.people = this.people.filter((item) => item.id !== itemId);
  }

  trackById(index: number, item: any) {
    return item.id;
  }
  // Virtual List
}
