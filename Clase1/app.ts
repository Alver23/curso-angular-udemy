class Avenger {
    nombre:string = "sin nombre!";
    equipo:string = "";
    nombreReal:string = "";

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor( nombre:string, equipo:string, nombreReal:string) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal
    }
}

let antman:Avenger = new Avenger("Atman", "Real Madrid", "Men");

console.log(antman);