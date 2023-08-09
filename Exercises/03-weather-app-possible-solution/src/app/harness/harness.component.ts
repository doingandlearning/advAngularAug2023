import { Component } from "@angular/core";

@Component({
  selector: "app-harness",
  templateUrl: "./harness.component.html",
  styleUrls: ["./harness.component.css"],
})
export class HarnessComponent {
  custfieldLabelA = "Category";
  custfieldLabelB = "ID number";
  custplaceTextA = "enter category";
  custplaceTextB = "enter id number";

  monitor = "watch here";

  constructor() {}

  ngOnInit() {}

  handleCustomEvent(e: any) {
    this.monitor = e.data;
  }
}
