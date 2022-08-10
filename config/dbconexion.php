<?php

const SERVER="localhost";
const DB="crud_pdo";
const USER="root";
const PASS="";
const UTF8="utf8";

const SGBD="mysql:host=".SERVER.";dbname=".DB.";charset=".UTF8;

class dbconexion
{
    protected function conexion()
    {
        try {
            $con = new PDO(SGBD, USER, PASS);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $con;
        } catch (PDOException $e) {
            echo "Conexion Fallida: " . $e->getMessage();
        }
    }
}
?>