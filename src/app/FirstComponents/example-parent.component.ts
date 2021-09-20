import { Component } from "@angular/core";

@Component({
  selector: 'example-parent',
  templateUrl: './example-parent.component.html',
  styleUrls: ['./example-parent.component.less'],

})
export class ExampleParentComponent {

  name ="User";

  constructor() {
  }

  writeToConsoleClickEvent($event: any) {
    console.log($event);
  }

  writeToConsoleBlurEvent($event: any) {
    console.log($event);
  }
}
