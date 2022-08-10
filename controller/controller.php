<?php
require_once "../config/dbconexion.php";
require_once "../model/model.php";

$sentencia = new consultas();
$result_set = $sentencia->get_personas(); // devuelve un array con el conjunto de datos de la db

foreach ($result_set as $row) {
    //echo "{'id':'".$row["id_persona"]."'}";
    print_r($row);
    print("<br>");
}
?>