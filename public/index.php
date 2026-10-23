<?php
// Página principal del proyecto intermodular
$titulo = "Proyecto Intermodular DAW2";
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title><?= $titulo ?></title>
  <script src="js/main.js"></script>
</head>
<body>
  <h1><?= $titulo ?></h1>
  <p>Datos procesados: <span id="contador">0</span></p>
  <button onclick="procesarDatos()">Procesar datos</button>
</body>
</html>
<!-- Autores: -->
