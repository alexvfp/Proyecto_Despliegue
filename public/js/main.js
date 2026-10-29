// Procesa los datos de la página y actualiza el contador
let contador = 0;

function procesarDatos() {
    let i = 0;
    // Bucle corregido: ahora 'i' aumenta en cada vuelta y no se congela
    while (i < 10) {
        console.log("Procesando dato " + i);
        i++; 
    }

    // Aumenta el contador global en 1 cada vez que se pulsa el botón
    contador++;

    // Actualiza el número en el HTML
    document.getElementById("contador").textContent = contador;
}


//codigo arreglado por adrianrrdev (Adrián Rodríguez Román)