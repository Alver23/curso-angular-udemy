import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'error'
})
export class ErrorPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return value.error.error.message;
  }

}
