var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EnfermedadSchema = new Schema({
    nombre: String,
    tipo: String,
    sintomas: String,
    tratamientos: String,
    especie: String
})

module.exports = mongoose.model('enfermedades', EnfermedadSchema);