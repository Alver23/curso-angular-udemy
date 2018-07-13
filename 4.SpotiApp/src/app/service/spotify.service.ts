import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  private apiVersion = 'v1';
  private apiBase = 'https://api.spotify.com/';

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.query('get', 'browse/new-releases?limit=20')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(term: string) {
    return this.query('get', `search?q=${term}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.query('get', `artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.query('get', `artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data.tracks));
  }

  private query(method, params: string) {
    const urlPath = `${this.apiBase}${this.apiVersion}/${params}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAvHTk1nh_ryaBAwz1hggEPMdDiz4bEYIh0VmifaYTjKnuaaupf377kK2poRhB99DyrG3w80mrZqTgqxqk'
    });
    return this.http[method](urlPath, {headers});
  }

}
