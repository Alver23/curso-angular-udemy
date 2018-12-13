import { Observable } from 'rxjs';

export interface IMovieService {
  getPopulars(): Observable<any>;
  getMoviesChild(): Observable<any>;
  getMoviesCurrent(): Observable<any>;
  search(value: string): Observable<any>;
  getMovieById(id: number): Observable<any>;
}

export interface IMovieResponse {
  page: number;
  results: Array<IMovie>;
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<string>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
