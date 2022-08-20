<?php

class consultas extends dbconexion
{
    public function get_personas()
    {
        $conectar = dbconexion::conexion();
        $sql = $conectar->prepare("SELECT * FROM persona");
        $sql->execute();
        return $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_persona($id_persona)
    {
        $conectar = dbconexion::conexion();
        $sql = $conectar->prepare("SELECT * FROM persona WHERE id_persona = ?");
        $sql->bindValue(1, $id_persona);
        if ($sql->execute()) {
            return $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    public function insert_persona($nombres, $apellidos, $genero)
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

    public function update_persona($id_persona, $nombres, $apellidos, $genero)
    {
        $conectar = dbconexion::conexion();
        $sql = "UPDATE persona 
					SET nombres = ?, 
						apellidos = ?,
						genero = ?
					WHERE id_persona = ?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $nombres);
        $sql->bindValue(2, $apellidos);
        $sql->bindValue(3, $genero);
        $sql->bindValue(4, $id_persona);
        if ($sql->execute()) {
            return $resultado = self::get_personas();
        }
    }

    public function eliminar_persona($id_persona)
    {
        $conectar = dbconexion::conexion();
        $sql = $conectar->prepare("DELETE FROM persona WHERE id_persona='" . $id_persona . "'");
        $sql->execute();
        if ($sql->rowCount() > 0) {
            return $resultado = self::get_personas();
            // return "Se elimino correctamente el registro";
        }
    }
}
