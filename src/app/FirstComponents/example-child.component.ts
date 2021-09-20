import { Component, Input } from "@angular/core";

@Component({
  selector: 'example-child',
  templateUrl: './example-child.component.html',
  styleUrls: ['./example-child.component.less'],

})
export class ExampleChildComponent {

    constructor() {}
    // почему нельзя объявить переменную вне конструктора? Как правильно объявлять пустые переменные?
    // TS2564: Property '_value' has no initializer and is not definitely assigned in the constructor.

    private _inputValue: string ="";
    private _changingInputValue: string ="";

    @Input() set inputValue(value: string) {
      if (value!=="word") {
        this._inputValue = value;
      }
    }

    @Input() set changingInputValue(value: string) {
      this._changingInputValue = value;
    }
    @Input() nullValue: string = "";
    @Input( ) undefinedValue: any;
    get inputValue() {
      return this._inputValue;
    }
    get changingInputValue() {
      return this._changingInputValue;
    }

}
