import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  pure: true,
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
