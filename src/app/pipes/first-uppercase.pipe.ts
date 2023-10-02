import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase',
  standalone: true,
})
export class FirstUppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
