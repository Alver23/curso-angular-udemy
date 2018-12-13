// Angular Dependencies
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as QueryString from 'query-string';
import { IMovieService } from './movie.service.interface';

@Injectable({
  providedIn: 'root'
})

export class MovieService implements IMovieService {
  private apiKey = '0f6e633c70280f852f4c2fee901bf664';
  private baseUrl = 'https://api.themoviedb.org/3/';
  private baseQueryString: Object = {
    api_key: this.apiKey,
    language: 'es',
  };
  constructor(private http: HttpClient) { }

  public getPopulars(): Observable<any> {
    const params: Object = {
      sort_by: 'popularity.desc'
    };
    return this.getMovies(params);
  }

  public getMoviesCurrent(): Observable<any> {
    const now: Date = new Date();
    const startDate: string = now.toISOString().slice(0, 10);
    const endDate: string = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7).toISOString().slice(0, 10);
    const params: Object = {
      'primary_release_date.gte': startDate,
      'primary_release_date.lte': endDate,
    };
    return this.getMovies(params);
  }

  public search(value: string): Observable<any> {
    const query = {
      query: value,
      sort_by: 'popularity.desc',
      ...this.baseQueryString
    };
    const queryString: string = QueryString.stringify(query);
    const URL = `${ this.baseUrl }search/movie?${ queryString }`;
    return this.http.get(URL);
  }

  public getMovieById(id: number): Observable<any> {
    const queryString: string = QueryString.stringify(this.baseQueryString);
    const URL = `${ this.baseUrl }movie/${ id }?${ queryString }`;
    return this.http.get(URL);
  }

  public getMoviesChild(): Observable<any> {
    const params: Object = {
      'certification.lte': 'G',
      'sort_by': 'popularity.desc',
      certification_country: 'US'
    };
    return this.getMovies(params);
  }

  private getMovies(params: Object): Observable<any> {
    const query = {
      ...params,
      ...this.baseQueryString
    };
    const queryString: string = QueryString.stringify(query);
    const URL = `${this.baseUrl}discover/movie?${ queryString }`;
    return this.http.get(URL);
  }
}
