<?php
include("conexion.php");

$sql = "SELECT * FROM accesorios";
$result = $db->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalogo</title>
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="../img/icono.png" type="image/x-icon">
</head>
<body>
    <?php
include("../html/header.html");
?>
<?php
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='tarjeta'>";

        $imagenUrl = "../img/" . $row["id"] . ".png";
        
        if (file_exists($imagenUrl)) {
            echo "<img src='" . $imagenUrl . "' alt='Imagen de " . $row["nombre"] . "' class='imagen'>";
        } 

        echo "<p>Nombre: " . $row["nombre"] . "</p>";
        echo "<p>Descripción: " . $row["descripcion"] . "</p>";
        echo "<p>Valor: " . $row["valor"] . "</p>";
        echo "<p>Cantidad: " . $row["cantidad"] . "</p>";

        echo "</div>";

    }
} else {
    echo "No se encontraron accesorios.";
}

$db->close();
?>
</body>
</html>
