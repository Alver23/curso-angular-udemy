import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  isError: boolean;
  messageError: string;
  newSongs: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.isError = false;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (error) => {
        this.loading = false;
        this.isError = true;
        this.messageError = error;
      });
  }

  ngOnInit() {
  }

}
