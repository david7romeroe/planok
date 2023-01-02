
-- Listado de clientes que han comprado estacionamientos en Santiago.
SELECT tipo_producto.idTipoProducto, tipo_producto.descripcion, producto.descripcion, cliente.rut, cliente.nombre FROM producto INNER JOIN tipo_producto ON producto.idTipoProducto = tipo_producto.idTipoProducto INNER JOIN cotizacion_producto ON cotizacion_producto.idProducto = producto.idProducto INNER JOIN cotizacion ON cotizacion.idCotizacion = cotizacion_producto.idCotizacion INNER JOIN cliente ON cliente.id = cotizacion.idCliente WHERE tipo_producto.idTipoProducto = 2 AND producto.estado = 'VENDIDO' AND producto.sector = 'Santiago';

-- Total, de departamentos Vendidos por el usuario PILAR PINO en Las Condes.
SELECT SUM(tipo_producto.idTipoProducto) as "Total Vendido", tipo_producto.idTipoProducto, usuario.id, usuario.nombre, usuario.apellido FROM producto INNER JOIN tipo_producto ON producto.idTipoProducto = tipo_producto.idTipoProducto INNER JOIN cotizacion_producto ON cotizacion_producto.idProducto = producto.idProducto INNER JOIN cotizacion ON cotizacion.idCotizacion = cotizacion_producto.idCotizacion INNER JOIN usuario ON usuario.id = cotizacion.idUsuario WHERE tipo_producto.idTipoProducto = 1 AND producto.sector = "Las Condes" AND producto.estado = 'VENDIDO' AND usuario.id = 6 GROUP BY 2,3;


-- Listar Productos creados entre el 2018-01-03 y 2018-01-20
SELECT tipo_producto.descripcion as tipo, producto.idProducto, producto.descripcion as descripcion_producto, producto.fechaCreacion FROM producto INNER JOIN tipo_producto ON tipo_producto.idTipoProducto = producto.idTipoProducto WHERE producto.fechaCreacion BETWEEN '2018-01-03' AND '2018-01-20';

-- Sumar el total de ventas realizadas en Santiago.
SELECT SUM(producto.idProducto) AS total_ventas FROM producto WHERE producto.sector = "Santiago" AND producto.estado = "VENDIDO";