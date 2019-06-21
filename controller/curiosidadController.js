const mongoose = require('mongoose');
const curiosidadModel = require('../models/Curiosidad')

var curiosidadC = {};

curiosidadC.getAll = (function (req, res) {
    curiosidadModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            console.log('successful')
            res.status(200).json(datos);
        }
    })
})

curiosidadC.anniadirCuriosidad = (function (req, res) {
    var obj = new curiosidadModel({        
        curiosidad: req.body.curiosidad
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

module.exports = curiosidadC;