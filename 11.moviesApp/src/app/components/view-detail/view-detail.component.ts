import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MovieService } from '../../providers/movie.service';
import { ActivatedRoute } from '@angular/router';
import { ICard } from '../card/card.interface';
import { IMovie } from '../../providers/movie.service.interface';
import { MovieTransformPipe } from '../../pipes/movie-transform.pipe';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css'],
  providers: [ MovieTransformPipe ]
})
export class ViewDetailComponent implements OnInit {

  public movie: ICard;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    public movieService: MovieService,
    public movieTransformPipe: MovieTransformPipe,
  ) { }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.movieService.getMovieById(id)
      .subscribe((response: IMovie) => {
        setTimeout(() => this.movie = this.movieTransformPipe.transform(response, 500, 'backdrop_path'), 1000);
      });
  }

  goBack(): void {
    this.location.back();
  }

}
