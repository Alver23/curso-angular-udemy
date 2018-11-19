import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user: any = {
    firstName: 'Alver',
    lastName: 'Grisales',
    email: null,
    country: '',
    gender: 'Hombre',
  };

  countries: Object = [
    {
      code: 'COL',
      name: 'Colombia',
    },
    {
      code: 'USA',
      name: 'Estados Unidos'
    },
  ];

  genders: string[] = ['Hombre', 'Mujer'];


  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }

}
