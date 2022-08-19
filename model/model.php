<?php

class consultas extends dbconexion
{
    public function get_personas()
    {
        $conectar = dbconexion::conexion();
        $sql=$conectar->prepare("SELECT * FROM persona");
        $sql->execute();
        return $array = $sql->fetchAll(PDO::FETCH_ASSOC);
    }

    public function insert_persona($nombres,$apellidos,$genero)
    {
        $conectar = dbconexion::conexion();
        $sql = $conectar->prepare("INSERT INTO persona (nombres,apellidos,genero) VALUES (?,?,?)");
        $sql->bindValue(1, $nombres);
        $sql->bindValue(2, $apellidos);
        $sql->bindValue(3, $genero);
        
        if ($sql->execute()) {
            return $resultado = self::get_personas();
        }
    }
}
