import { Component } from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;
  messageError: string;

  constructor(private spotify: SpotifyService) { }

  search(term: string) {
    this.messageError = null;
    if (term) {
      this.loading = true;
      this.spotify.getArtists(term)
        .subscribe((data: any) => {
          this.artists = data;
          this.loading = false;
        }, (err: any) => {
          this.messageError = err;
          this.loading = false;
        });
    } else {
      this.artists = [];
      this.messageError = null;
    }
  }

}
