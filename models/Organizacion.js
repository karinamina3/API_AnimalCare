var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const OrganizacionSchema = new Schema({
    img: String,
    nombre: String,
    telefono: String,
    direccion: String
})

module.exports = mongoose.model('organizaciones', OrganizacionSchema);