import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(value: string) {
    return value
      .split(' ')
      .map((v) => v[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
