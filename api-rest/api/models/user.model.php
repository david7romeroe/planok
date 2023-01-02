<?php

require("../api/core/database.php");

    class UserModel extends DataBase {

        public function __construct()
        {
            $this->DBConnection();

        }

        public function getUsers(){

            $results = $this->connection->query("SELECT usuario.*, perfil.descripcion as perfil FROM usuario NATURAL JOIN perfil;");

            if(!$results) {

                $response = [
                    'message' => "query failed: ". $this->connection->connect_error,
                    'error' => true
                ];

                return $response; 
            } else{
                return $results->fetch_all(MYSQLI_ASSOC);
            }

        }

    }