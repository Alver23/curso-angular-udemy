import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../providers/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {IMovie, IMovieResponse} from '../../providers/movie.service.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies: Array<IMovie>;
  public query: string = '';
  public loading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(filter(params => params.query))
      .subscribe((params: IParams) => {
        this.loading = true;
        this.query = params.query;
        this.movieService.search(params.query)
          .subscribe((response: IMovieResponse) => {
            setTimeout(() => {
              this.movies = response.results;
              this.loading = false;
            }, 1000);
          });
      });
  }

  public search(text: string) {
    if (text) {
      /*this.query = text;
      this.loading = true;
      this.movieService.search(text)
        .subscribe((response: IMovieResponse) => {
          setTimeout(() => {
            this.movies = response.results;
            this.loading = false;
          }, 3000);
        });*/
    }
    text && (
      this.router.navigate(['/search'], { queryParams: {query: text}})
    );
  }

}

interface IParams {
  query: string;
}
