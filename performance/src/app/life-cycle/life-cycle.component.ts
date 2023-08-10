import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent {
  @Input() data: any;
  themeSettings = {
    primaryColor: 'blue',
    secondaryColor: 'red',
    fontSize: '16px',
  };

  previousSettings = { ...this.themeSettings };

  didThemeSettingsChange(): boolean {
    return Object.keys(this.themeSettings).some(
      (key) => this.previousSettings[key] !== this.themeSettings[key]
    );
  }
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

  ngDoCheck() {
    console.log('ngDoCheck called');
    if (this.didThemeSettingsChange()) {
      console.log('Theme settings have changed!');
      // Update any necessary parts of your component or execute any logic.
      this.previousSettings = { ...this.themeSettings };
    }
  }

  ngAfterContentInit() {
    // ng-content
  }

  ngAfterContentChecked() {
    // after every angular check of ng-content
  }

  ngAfterViewInit() {}
}
