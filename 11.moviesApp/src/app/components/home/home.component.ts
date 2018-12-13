import { Component, OnInit } from '@angular/core';
import { IMovie, IMovieResponse } from '../../providers/movie.service.interface';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pupulars: Array<IMovie>;
  public moviesCurrent: Array<IMovie>;
  public moviesChild: Array<IMovie>;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopulars()
      .subscribe((response: IMovieResponse) => setTimeout(() => this.pupulars = response.results, 1000));
    this.movieService.getMoviesCurrent()
      .subscribe((response: IMovieResponse) => setTimeout(() => this.moviesCurrent = response.results, 1000));
    this.movieService.getMoviesChild()
      .subscribe((response: IMovieResponse) => setTimeout(() => this.moviesChild = response.results, 1000));
  }

}
