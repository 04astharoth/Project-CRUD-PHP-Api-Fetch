<?php
require_once "../config/dbconexion.php";
require_once "../model/model.php";

$sentencia = new consultas();

switch ($_GET["op"]) {
    case 'listar':
        $result_set = $sentencia->get_personas(); // devuelve un conjunto de arreglos, cada arreglo es una fila de la tabla de la db
        $data = array();
        foreach ($result_set as $row) {
            //echo "{'id':'".$row["id_persona"]."'}";
            // print_r($row); // se imprime un array con propiedades como indices
            // print("<br>");
            array_push($data, array("id_persona" => $row['id_persona'], "nombres" => $row['nombres'], "apellidos" => $row['apellidos'], "genero" => $row['genero']));
            $json = json_encode($data); //formateado como json
        }
        echo $json;
        break;

    case 'guardar':
        $nombres = $_POST["nombres"];
        $apellidos = $_POST["apellidos"];
        $genero = $_POST["genero"];
        $insercion = $sentencia->insert_persona($nombres, $apellidos, $genero);
        echo json_encode($insercion);
        break;

    default:
        # code...
        break;
}
