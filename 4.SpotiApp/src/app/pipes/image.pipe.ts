import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(images: any[]): string {
    return (images && images.length > 0) ? images[0].url : 'assets/img/noimage.png';
  }

}
