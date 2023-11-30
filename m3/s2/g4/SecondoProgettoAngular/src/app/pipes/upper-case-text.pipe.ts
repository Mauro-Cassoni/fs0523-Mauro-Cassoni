import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UpperCaseText'
})
export class UpperCaseTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
