var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://ulises:11654252@cluster0.zz4ua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

function nuevoAlumno() {
  var alum = Alumno({
    numeroCuenta: "55665566"
  });

  alum.save(function(err, data) {
    if (err) {
      console.log("------------------------ERROR --------------------------");
    } else {
      console.log("--------------------------OK ---------------------------");
    }
  });
}


function main() {
  nuevoAlumno();
}

main(); // ejecutamos main
