var mongoose = require('mongoose');

var TransporteSchema = new mongoose.Schema({
  nome: String,
  razao_social: String,
  condutor: String,
  idade_condutor: Number,
  horarios: String,
  turnos: String
});

module.exports = mongoose.model('Transporte', TransporteSchema);

