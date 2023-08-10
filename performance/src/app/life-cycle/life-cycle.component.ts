import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent {
  @Input() data: any;

  ngOnInit() {
    console.log('ngOnInit called ....');
    // subscribe
  }

  ngOnDestroy() {
    // unsubscribe
    console.log('ngOnDestroy was called ... ');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges was called', changes);
  }

  ngDoCheck() {}

  ngAfterContentInit() {
    // ng-content
  }

  ngAfterContentChecked() {
    // after every angular check of ng-content
  }

  ngAfterViewInit() {}
}
