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
}

?>