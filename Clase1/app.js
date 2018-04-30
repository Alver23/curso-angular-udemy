let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promesa terminada")

        // Termina bien
        resolve();

        // Termina mal
        //reject();
    }, 1500);
})
prom1.then(() => console.log("Ejecutarme si todo sale bien"))
.catch((err) => console.log("Ejecutarme si todo sale mal"))