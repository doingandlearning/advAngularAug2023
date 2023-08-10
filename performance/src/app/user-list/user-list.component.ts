import { Component } from '@angular/core';
import { DataLoaderService } from '../data-loader.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users$: Observable<any> = new Observable();
  constructor(private dataLoader: DataLoaderService) {}

  ngOnInit() {
    this.users$ = this.dataLoader.loadData();
  }
}
