<?php


    class DataBase {

        private static $hostname = 'localhost';
        private static $username = 'root';
        private static $password = '';
        private static $dataBase = 'planok_final';

        protected final function DBConnection(){
        
            $this->connection = new mysqli(self::$hostname,self::$username,self::$password,self::$dataBase);

            if ($this->connection->connect_errno) {

                printf("connection failed: %s\n", $this->connection->connect_error);
                exit();
            }
        }

        public function __destruct()
        {
            $this->connection->close();
        }


    }