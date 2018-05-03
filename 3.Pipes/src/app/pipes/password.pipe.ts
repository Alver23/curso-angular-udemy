import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean): string {
    if (active) {
      let string = '';
      for (let i = 0; i < value.length; i++) {
        string += '*';
      }
      return string;
    }

    return value;
  }

}
