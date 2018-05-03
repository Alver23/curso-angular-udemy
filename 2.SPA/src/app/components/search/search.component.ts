import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:any = [];
  term:string;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private heroesService:HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.term = params.term
      this.heroes = this.heroesService.searchHeroes(this.term);
      console.log(this.heroes)
    })
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
