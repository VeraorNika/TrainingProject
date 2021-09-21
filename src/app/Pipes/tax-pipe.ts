import { Pipe } from "@angular/core";
@Pipe({
  name: "addTax",
  pure: true
})
export class TaxPipe {
  defaultRate: number = 10;
  transform(value: any, rate?: any): number {
    let valueNumber = Number.parseFloat(value);
    let rateNumber = rate == undefined ?
      this.defaultRate : Number.parseInt(rate);
    return valueNumber *  (1 + (rateNumber / 100));
  }
}
