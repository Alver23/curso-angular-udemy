import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(
    private router:Router,
    private heroeService:HeroesService,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params.id);
    })
  }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['/heroes']);
  }

}
