var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const VeterinariaSchema = new Schema({
    img: String,
    nombre: String,
    telefono: String,
    direccion: String
})

module.exports = mongoose.model('veterinarias', VeterinariaSchema);