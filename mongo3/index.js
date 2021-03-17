var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://ulises:11654252@cluster0.zz4ua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function deleteAlumnoByNumCta(nc){
 Alumno.findOneAndDelete({numeroCuenta:nc},function(err,data){
   if (err) {
     console.log(err);
   }
   console.log(data);
 });
}

function main() {
 //deleteAlumnoByNumCta("4444444");
}

main();    // ejecutamos main
