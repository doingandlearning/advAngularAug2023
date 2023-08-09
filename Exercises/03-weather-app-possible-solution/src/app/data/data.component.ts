import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"],
})
export class DataComponent {
  @Input() fieldLabelA: string = "City";
  @Input() fieldLabelB: string = "Country";
  @Input() placeTextA = "enter city";
  @Input() placeTextB = "enter country";
  @Input() buttonLabel = "Go";
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  valueA: string = "";
  valueB: string = "";

  constructor() {}

  ngOnInit() {}

  handleClick(): void {
    this.myEvent.emit({
      data: {
        [this.fieldLabelA]: this.valueA,
        [this.fieldLabelB]: this.valueB,
      },
    });
  }
}
