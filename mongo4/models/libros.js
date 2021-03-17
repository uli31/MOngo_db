var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  Titulo: String,
  autor: {
    primer: String,
    paterno: String,
    materno: String
  },
  genero: String,
  edicion: Number,
  editorial:String,
  Numero_de_pagina:Number,
  sinopsis:String
});

module.exports = mongoose.model('Libro',LibroSchema);
