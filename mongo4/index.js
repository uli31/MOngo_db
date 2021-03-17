var mongoose = require('mongoose');
var libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://ulises:11654252@cluster0.zz4ua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function nuevoLibro() {


    var lib=libro({
      Titulo: "EL PRINCIPITO",
      autor: {
        primer: "Antoine",
        paterno: "Saint",
        materno: "EXUPERY"
      },
      genero: "FANTASIA",
      edicion: 2,
      editorial:"MEXICANA",
      Numero_de_pagina:450,
      sinopsis:"El principito es une q donde conoce a un pequeño príncipe proveniente de otro "
    });


    lib.save(function(err,data){
      if (err) {
        console.log("------------------------ERROR --------------------------");
      }else {
        console.log("------------------------OK ---------------------------");
      }
    });
  }

  function main() {
  nuevoLibro();
}

main();
