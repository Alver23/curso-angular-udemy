import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Contracts
import {Heroe, HeroeResponse} from '../../contracts/heroe.interface';

// Services
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  houses: Array<string> = ['Marvel', 'DC'];

  heroe: Heroe = {
    name: '',
    bio: '',
    house: 'Marvel'
  };

  public alert: boolean;
  public loading: boolean;
  private id: string;

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService) {}

  ngOnInit() {
    this._activatedRoute.params
      .subscribe((params: any) => {
        this.id = params.id;
        this.id !== 'new' && this._heroeService.heroe(this.id)
          .subscribe((response: any) => {
            response ? (this.heroe = response) : this.addParameterRouter('new');
          });
      });
  }

  private addParameterRouter(param: string) {
    this.router.navigate(['/heroe', param]);
  }

  onSubmit(form: NgForm) {
    this.alert = false;
    if (form.valid) {
      let id: string;
      this.id !== 'new' && (id = this.id);
      this.loading = true;
      this._heroeService.store(this.heroe, id)
        .subscribe((response: any) => {
          !id && (this.addParameterRouter(response.name));
          this.alert = true;
          this.loading = false;
          setTimeout(() => {
            this.alert = false;
          }, 1000);
        }, error => console.error(error));
    }
  }

  addHeroe(form: NgForm) {
    this.addParameterRouter('new');
    form.reset({
      house: 'Marvel',
    });
  }

}
