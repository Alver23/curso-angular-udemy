"use strict";
/* let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga",
};

 let nombre:string = avenger.nombre;
let clave:string = avenger.clave;
let poder:string = avenger.poder;
// let { poder:string } = avenger; => string queda como alias de poder

let { poder, nombre, clave } = avenger; */
var avenger = ["Thor", "Steve", "Tony"];
// let [ thor, steve, iroman ] = avenger; // Debe ser secuencial par tomar los valores
var iroman = avenger[2];
console.log(iroman);
