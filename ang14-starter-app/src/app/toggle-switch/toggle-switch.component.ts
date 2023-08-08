import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css'],
})
export class ToggleSwitchComponent implements OnInit {
  constructor() {}
  @Input() switchState: boolean = false;
  @Output() stateChanged = new EventEmitter<boolean>();

  toggleCount: number = 0;

  toggleSwitch() {
    this.switchState = !this.switchState;
    this.toggleCount++;
    this.stateChanged.emit(this.switchState);
  }
  ngOnInit(): void {}
}
