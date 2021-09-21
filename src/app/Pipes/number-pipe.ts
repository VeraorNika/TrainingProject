import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rusFraction'
})
export class NumberPipe implements PipeTransform {

  //pipe МОГУТ наследовать интерфейс PipeTransform, но не обязаны. Первый аргумент - то, к чем применяется pipe
  transform(value: number, args?: any): string {

    return value.toString().replace(".", ",");
  }
}
