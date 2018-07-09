import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() index: number;
  @Input() heroe: Heroe;
  @Output() heroeSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  viewHeroe() {
    this.heroeSelected.emit(this.index);
  }

}
