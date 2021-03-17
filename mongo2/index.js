var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://ulises:11654252@cluster0.zz4ua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function nuevoAlumno() {

  var alum= Alumno({
    numeroCuenta: "315190445",
    nombre: {
      primer: "Alberto",
      paterno: "Hernandez",
      materno: "Cruz"
    },
    semestre: 8,
    promedio: 8.99
  });

  alum.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}


function nuevosAlumnos() {

  var alumnos=[
    { numeroCuenta: "1111111",nombre: {primer: "gorge", paterno: "Hernandez", materno: "Cabrera" },semestre: 6, promedio: 7.99},
    { numeroCuenta: "2222222",nombre: {primer: "Diego", paterno: "Pérez", materno: "Zedillo" },semestre: 2, promedio:8.2},
    { numeroCuenta: "3333333",nombre: {primer: "david", paterno: "Pérez", materno: "Obrador" },semestre: 3, promedio: 7.3},
    { numeroCuenta: "4444444",nombre: {primer: "monser", paterno: "Dávila", materno: "Moreno" },semestre: 4, promedio: 7.1},
    { numeroCuenta: "5555555",nombre: {primer: "manuel", paterno: "Olarte", materno: "Paz" },semestre: 8, promedio: 9.2},

  ];


  Alumno.collection.insert(alumnos,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}
function main() {
  //nuevoAlumno();
  nuevosAlumnos();
}

main();
