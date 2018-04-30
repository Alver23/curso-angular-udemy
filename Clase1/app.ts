interface Xmen {
    nombre:string,
    poder:string,
};

function enviarMision(xmen: {nombre:string}) {
    console.log(`Enviando a: ${xmen.nombre}`)
};

function enviarCuartel(xmen: Xmen) {
    console.log(`Enviando a cuartel: ${xmen.nombre}`)
}

let wolverine = {
    nombre: "Wolverine",
    poder: "Regenracion"
};

enviarMision(wolverine);
enviarCuartel(wolverine);