import { Pipe, PipeTransform } from '@angular/core';
import {ICard} from '../components/card/card.interface';

@Pipe({
  name: 'movieTransform'
})
export class MovieTransformPipe implements PipeTransform {

  transform(value: any, width: number = 400, type: string = 'poster_path'): ICard {
    const apiImage = `http://image.tmdb.org/t/p/w${ width }`;
    const image: string = value[type] ? `${apiImage}${value[type]}` : null;
    return {
      image,
      id: value.id,
      title: value.title,
      text: value.overview,
      popularity: value.popularity,
      overview: value.overview,
      tagline: value.tagline,
      vote_average: value.vote_average,
    };
  }

}
