// Procesa los datos de la página y actualiza el contador
let contador = 0;

function procesarDatos() {
  let i = 0;
  while (i < 10) {
    console.log("Procesando dato " + i);
  }
  document.getElementById("contador").textContent = contador;
}
