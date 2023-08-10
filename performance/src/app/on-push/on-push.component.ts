import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { DataService } from '../data.service';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {
  time: number = 0;
  data: any;
  data$: Observable<any> = new Observable();
  @Input() moreData: { value: number } = { value: 0 };

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {
    setInterval(() => {
      this.time++;
      console.log('OnPush Timer: ', this.time);
    }, 1000);

    this.data$ = interval(1000).pipe(
      map((second) => `Seconds passed: ${second}`)
    );
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe((response) => {
      this.data = response;
      this.cd.detectChanges();
    });
  }

  forceUpdate() {
    this.time++;
  }
}
