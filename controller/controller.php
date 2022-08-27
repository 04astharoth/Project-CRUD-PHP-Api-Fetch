<?php
require_once "../config/dbconexion.php";
require_once "../model/model.php";

$consultas = new consultas();

switch ($_GET["op"]) {
    case 'listar':
        $result_set = $consultas->get_personas(); // devuelve un conjunto de arreglos, cada arreglo es una fila de la tabla de la db
        $data = array();
        foreach ($result_set as $row) {
            array_push($data, array("id_persona" => $row['id_persona'], "nombres" => $row['nombres'], "apellidos" => $row['apellidos'], "genero" => $row['genero']));
            $json = json_encode($data); //formateado como json
        }
        echo $json;
        break;

    case 'guardar':
        $nombres = $_POST['nombres'];
        $apellidos = $_POST['apellidos'];
        $genero = $_POST['genero'];
        $insercion = $consultas->insert_persona($nombres, $apellidos, $genero);
        echo json_encode($insercion);
        break;

    case 'editar':
        $id_persona = $_POST['id'];
        $ejecutar = $consultas->get_persona($id_persona);
        echo json_encode($ejecutar);
        break;
    case 'update':
        $id_persona = $_POST['idUdt'];
        $nombres = $_POST['nombresUdt'];
        $apellidos = $_POST['apellidosUdt'];
        $genero = $_POST['generoUdt'];
        $actualizacion = $consultas->update_persona($id_persona,$nombres, $apellidos, $genero);
        echo json_encode($actualizacion);
        break;
    case 'eliminar':
        $id_persona = $_POST['id'];
        $ejecutar = $consultas->delete_persona($id_persona);
        echo json_encode($ejecutar);
        break;

    default:
        # code...
        break;
}
