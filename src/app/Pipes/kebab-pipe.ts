import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebab'
})
export class KebabPipe implements PipeTransform {

  transform(value: string, args?: any): string {

    return 'str';
  }
}
