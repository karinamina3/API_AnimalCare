var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const LeySchema = new Schema({
    apartado: String,
    articulo: String
})

module.exports = mongoose.model('leyes', LeySchema);