import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../contracts/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[];
  public alert: boolean;
  public loading: boolean;

  constructor(private _heroeService: HeroesService) { }

  ngOnInit() {
    this.loading = true;
    this._heroeService.heroes()
      .subscribe((response: any) => {
        setTimeout(() => {
          this.loading = false;
          this.heroes = response;
        }, 2000);
      });
  }

  delete(id: string) {
    this._heroeService.delete(id)
      .subscribe((response: any) => {
        if (!response) {
          this.alert = true;
          this.heroes = this.heroes.filter((heroe: Heroe) => heroe.id !== id);
          setTimeout(() => {
            this.alert = false;
          }, 1000);
        }
      });
  }

}
