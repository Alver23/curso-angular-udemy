import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Alver Grisales';
  nombre2 = 'alver alexander grisales orTEga';
  array = [1, 2, 3, 4, 5, 7, 8, 9, 10];
  PI = Math.PI;
  percentaje = 0.234;
  salary = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: '19'
    }
  };
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 3000);
  });
  fecha = new Date();
  video = 'Xg_YyUUpoIg';
  active = true;
}
