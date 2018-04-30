function saludar(nombre: string){
    alert("Hola " + nombre.toUpperCase());
}

var wolverine = {
    nombre: "Logan"
};

saludar(wolverine.nombre);

let nombre:string = "Peter";
let numero:number = 123;
let bool:boolean = true;
let hoy:Date = new Date();

hoy = new Date('2020-10-21');

let cualquiera:any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = bool;
cualquiera = hoy;

let spiderman = {
    nombre: "Peter",
    edad: 20,
};

spiderman = {
    nombre: "Juan",
    edad: 30,
    apellido: "perez",
}

