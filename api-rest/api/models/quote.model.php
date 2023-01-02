<?php

require("../api/core/database.php");

    class QuoteModel extends DataBase{

        function __construct()
        {
            $this->DBConnection();
        }

        function getQuotes()
        {

            $query = $this->connection->query("SELECT 
            cotizacion.idCotizacion,
            cliente.rut as rutCliente,
            cotizacion.subtotal,
            cotizacion.descuento,
            cotizacion.total 
            FROM cotizacion INNER JOIN cliente 
            ON cliente.id = cotizacion.idCliente;
            ");

            if(!$query) {

                $response = [
                    'message' => "query failed: ". $this->connection->connect_error,
                    'error' => true
                ];

                return $response; 
            } else{
                return $query->fetch_all(MYSQLI_ASSOC);
            }   
        }

        public function getQuotesById($id){

            $query = $this->connection->prepare("SELECT 
            cotizacion.idCotizacion, 
            cotizacion.descuento, 
            cotizacion.subtotal, 
            cotizacion.total, 
            cotizacion.fechaCreacion, 
            cotizacion.estado, 
            cotizacion.montoCredito, 
            cliente.rut as rut_cliente, 
            cliente.nombre as cliente, 
            usuario.rut as rut_usuario, 
            CONCAT(usuario.nombre,' ',usuario.apellido) as usuario, 
            tipo_producto.descripcion as tipo_producto, 
            producto.descripcion as descripcion_producto, 
            producto.valorLista as valor_producto 
            FROM cotizacion INNER JOIN cliente 
            ON cliente.id = cotizacion.idCliente 
            INNER JOIN usuario ON usuario.id = cotizacion.idUsuario 
            INNER JOIN cotizacion_producto ON cotizacion_producto.idCotizacion = cotizacion.idCotizacion 
            INNER JOIN producto ON producto.idProducto = cotizacion_producto.idProducto 
            INNER JOIN tipo_producto ON tipo_producto.idTipoProducto = producto.idTipoProducto 
            WHERE cotizacion.idCotizacion = ?;");

            $query->bind_param('i', $id);
            $query->execute();

            $result = $query->get_result();
            
            if($result) {

                return $result->fetch_array(MYSQLI_ASSOC);
            } else {
                
                $response = [
                    'message' => "query failed: ". $this->connection->connect_error,
                    'error' => true
                ];

                return $response;
            }

        }
    }