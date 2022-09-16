<?php

$llaves = [
    "marca",
    "modelo",
    "color",
    "anio",
    "kilo",
    "precio",
    "cuota",
    "patente",
    "estado",
];

print_r($_POST);

foreach ($llaves as $key => $value) {
    if(array_key_exists($value, $_POST)){
        echo("Existe  ");
    }else{
        echo("no  ");
    }
}

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Carga</title>
</head>
<body>
    <center>
        <form action="/proyecto/carga.php" method="post">
            <label for="marca" > Marca </label><br>
            <input type="text" name= "marca" placeholder="Ej:  Fiat" id="marca"><br>
            <label for="modelo" > Modelo </label><br>
            <input type="text" name= "modelo" placeholder="Ej:  Camaro" id="modelo"><br>
            <label for="color" > Color </label><br>
            <input type="text" name= "color" placeholder="Ej:  Negro" id="color"><br>
            <label for="anio" > Año </label><br>
            <input type="text" name= "anio" placeholder="Ej:  2017" id="anio"><br>
            <label for="kilo" > Kilometros </label><br>
            <input type="text" name= "kilo" placeholder="Ej:  0" id="kilo"><br>
            <label for="precio" > Precio </label><br>
            <input type="text" name= "precio" placeholder="Ej:  2000000" id="precio"><br>
            <label for="cuota" > Cuotas </label><br>
            <input type="text" name= "cuota" placeholder="Ej:  12" id="cuota"><br>
            <label for="patente" > Patente </label><br>
            <input type="text" name= "patente" placeholder="Ej:  HHY 584" id="patente"><br>
            <label for="estado" > Estado </label><br>
            <input type="text" name= "estado" placeholder="Ej:  Disponible" id="estado"><br><br>
            <input type="submit" name="envio" value="Cargar Auto">
        </form>
    </center>
</body>
</body>
</html>