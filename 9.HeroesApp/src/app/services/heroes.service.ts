import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Contracts
import {Heroe} from '../contracts/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = 'https://heroesapp-faf57.firebaseio.com/';
  private heroesUrl: string = `${this.baseUrl}heroes`;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
  }

  public store(heroe: Heroe, id?: string, config: any = {}) {
    return id ? this.update(id, heroe, config) : this.save(heroe, config);
  }

  public heroe(id: string, config: any = {}) {
    const URL: string = `${this.heroesUrl}/${id}.json`;
    config = this.getConfig(config);
    return this.http.get(URL, config);
  }

  public heroes(config: any = {}) {
    const URL: string = `${this.heroesUrl}.json`;
    config = this.getConfig(config);
    return this.http.get(URL, config)
      .pipe(map((response: any) => this.transformHeroes(response)));
  }

  public delete(id: string, config: any = {}) {
    const URL: string = `${this.heroesUrl}/${id}.json`;
    config = this.getConfig(config);
    return this.http.delete(URL, config);
  }

  private save(heroe: Heroe, config: any = {}) {
    const body: string = JSON.stringify(heroe);
    config = this.getConfig(config);
    return this.http.post(`${this.heroesUrl}.json`, body, config)
  }

  private update(id: string, heroe: Heroe, config: any = {}) {
    const body: string = JSON.stringify(heroe);
    const URL: string = `${this.heroesUrl}/${id}.json`;
    config = this.getConfig(config);
    return this.http.put(URL, body, config);
  }

  private getConfig(config: any) {
    return {
      ...this.headers,
      ...config,
    };
  }

  private transformHeroes(data: any) {
    const heroes: Array<any> = [];
    for (const key in data) {
      heroes.push({
        id: key,
        ...data[key],
      });
    }
    return heroes;
  }
}
