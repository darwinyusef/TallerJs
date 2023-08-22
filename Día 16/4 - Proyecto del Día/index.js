//Configurar con ExpressJS el servidor de la app
const express = require("express");
const app = express();

//Guardar al componente MySQL que importamos desde conexion.js
const mySQL = require("./conexion");

app.use(express.json());

//Método GET para consultar un estudiante
app.get("/estudiantes/:legajo", (pedido, respuesta) => {
    mySQL.conexion.query('SELECT * FROM estudiante WHERE legajo = ' + pedido.params.legajo, function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados);        
    });
})

//Método POST para agregar un estudiante
app.post("/estudiantes/create", (pedido, respuesta) => {
    mySQL.conexion.query('INSERT INTO estudiante (nombre, email) VALUES ("' + pedido.body.nombre + '", "' + pedido.body.email + '")', function(error, resultados) {
        if (error) throw error;
        respuesta.send('Estudiante registrado: Id ' + resultados.insertId);        
    });
})

//Método POST para agregar una nota
app.post("/notas/create", (pedido, respuesta) => {
    mySQL.conexion.query('INSERT INTO examen (codigo_curso, legajo_estudiante, nota, fecha)' + 
                           'VALUES ("' + pedido.body.curso + '", ' + pedido.body.estudiante + ', ' + pedido.body.nota + ', "' + pedido.body.fecha + '")', function(error, resultados) {
        if (error) throw error;
        respuesta.send('Examen registrado: Id ' + resultados.insertId);        
    });
})

//Método PUT para actualizar una nota
app.put("/notas/:id/update", (pedido, respuesta) => {
    mySQL.conexion.query('UPDATE examen SET codigo_curso = "' + pedido.body.curso + '"' +
                                           ', legajo_estudiante = ' + pedido.body.estudiante +
                                           ', nota = ' + pedido.body.nota + 
                                           ', fecha = "' + pedido.body.fecha + '" ' +
                           'WHERE id = ' + pedido.params.id, function(error, resultados) {
        if (error) throw error;
        respuesta.send('Examen modificado');        
    });
})

//Método Delete para eliminar una nota
app.delete("/notas/:id/delete", (pedido, respuesta) => {
    mySQL.conexion.query('DELETE FROM examen WHERE id = ' + pedido.params.id, function(error, resultados) {
        if (error) throw error;
        respuesta.send('Examen eliminado');        
    });
})

//Método GET para obtener las notas aprobadas
app.get("/notas/:codigo/aprobados", (pedido, respuesta) => {
    mySQL.conexion.query('SELECT * FROM examen WHERE codigo_curso = "' + pedido.params.codigo + '" AND nota > 5', function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados);        
    });
})

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})