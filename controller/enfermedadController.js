const mongoose = require('mongoose');
const enfermedadModel = require('../models/Enfermedad')

var enfermedadC = {};

enfermedadC.getAll = (function (req, res) {
    enfermedadModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            console.log('successful')
            res.status(200).json(datos);
        }
    })
})

enfermedadC.anniadirEnfermedad = (function (req, res) {
    var obj = new enfermedadModel({        
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        sintomas: req.body.sintomas,
        tratamientos: req.body.tratamientos,
        especie: req.body.especie        
    });
    obj.save(function (err) {
        if (err) {
            res.status(500).json({ status: 500, err })
        } else {
            console.log('successful');
            res.status(200).json(obj);
        }
    })
})

module.exports = enfermedadC;