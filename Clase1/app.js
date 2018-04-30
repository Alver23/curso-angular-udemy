"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "sin nombre!";
        this.equipo = "";
        this.nombreReal = "";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Atman", "Real Madrid", "Men");
console.log(antman);
