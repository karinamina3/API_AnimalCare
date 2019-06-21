var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EspecieSchema = new Schema({
    nombreEspecie: String,
    raza: [
        {
            img: String,
            nombre: String,
            origen: String,
            descripcion: String,
            pelo: String,
            aseo: String,
            tamanio: String,
            ruidoso: String,
            personalidad: String,
            salud: String,
            nutricion: String
        }
    ]
})

module.exports = mongoose.model('especies', EspecieSchema);