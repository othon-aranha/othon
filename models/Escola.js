var mongoose = require('mongoose');

var EscolaSchema = new mongoose.Schema({
  nome: String,
  endereco: String,
  tipo: String,
  horario_funcionamento: String,
  registro_mec: Number
});

module.exports = mongoose.model('Escola', EscolaSchema);

