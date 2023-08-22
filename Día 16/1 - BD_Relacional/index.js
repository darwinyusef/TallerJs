//Configurar con eExpressJS el servidor de la app
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

//Llamar al componente de mysql
var mysql = require('mysql');

//Establecer los parámetros de la conexión
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'mibasenueva'
});

//Nos conectamos con la base
connection.connect();

//Agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES (1, "Federico", 1, 155155, "Av. Siempreviva 4269")', function(error, resultados){
    if(error) throw error;
    console.log(resultados)
});

//Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas)
});

//Realizar modificacion de registro
connection.query('UPDATE cliente SET genero = 0, telefono = 166166 WHERE identificador = 1', function(error, resultados){
    if(error) throw error;
    console.log(resultados)
});

//Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas)
});

//Eliminar un registro
connection.query('DELETE FROM cliente WHERE identificador = 1', function(error, resultados){
    if(error) throw error;
    console.log(resultados)
});

//Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas)
});

//Cerramos la conexión
connection.end();