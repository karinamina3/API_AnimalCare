var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CuriosidadSchema = new Schema({
    curiosidad: String
})

module.exports = mongoose.model('curiosidades', CuriosidadSchema);