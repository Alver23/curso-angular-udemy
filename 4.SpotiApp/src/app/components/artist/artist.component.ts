import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../service/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.router.params.subscribe((params: any) => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe((artist: any) => {
        this.loading = false;
        this.artist = artist;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe((tracks: any) => this.topTracks = tracks);
  }

}
