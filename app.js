// requires
var express = require('express');
var mongoose = require('mongoose');

// iniciar variables
var app = express();

// conexion a base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res)=> {
    if (err) throw err;
    console.log('Base de datos Online');
})

// rutas
app.get('/', (req, res, next) =>{

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })

});

// escuchar peticion
app.listen(3000, () =>{
    console.log('Express server puerto 3000');
});