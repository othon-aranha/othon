var mongoose = require('mongoose');

var ProfessorSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  turma: String,
  turno: String,
  matricula: Number,
  materia: String
});

module.exports = mongoose.model('Professor', ProfessorSchema);

