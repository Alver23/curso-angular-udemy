import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewArtist(item: any) {
    if ( item.type === 'artist' ) {
      const artistaId = item.id;
      this.router.navigate([ '/artist', artistaId  ]);
    }
  }


}
