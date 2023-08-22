const express = require("express");
const cors = require("cors");
const app = express();

const mySQL = require("./connection");

app.use(cors());
app.use(express.json());

app.post("/usuarios/login", (pedido, respuesta) => {    
    mySQL.connection.query('SELECT id FROM usuarios WHERE (administrador = 0 AND email = "' + pedido.body.email + '" AND pass = "' + pedido.body.pass + '") ' + 
                           'OR (administrador = 1 AND email = "' + pedido.body.email + '" AND pass = "' + pedido.body.pass + '")', function(error, resultados) {
        if (error) throw error;
        if(resultados.length === 0)
            respuesta.send(undefined);
        else    
            respuesta.send(true);
    });
})

app.post("/usuarios/create", (pedido, respuesta) => {
    mySQL.connection.query('INSERT INTO usuarios (email, pass, administrador) VALUES ("' + pedido.body.email + '", "' + pedido.body.pass + '", 0)', function(error, resultados) {
        if (error) throw error;
        mySQL.connection.query('INSERT INTO permisosxusuario VALUES (' + resultados['insertId'] + ', 2)', function(error, resultados) {
            if (error) throw error;
            respuesta.send(true);
        });
    });
})

app.get("/ofertas", (pedido, respuesta) => {    
    mySQL.connection.query('SELECT * FROM ofertas', function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados);
    });
})

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})