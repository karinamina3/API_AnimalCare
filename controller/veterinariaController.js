const mongoose = require('mongoose');
const veterinariaModel = require('../models/Veterinaria')

var veterinariaC = {};

veterinariaC.getAll = (function (req, res) {
    veterinariaModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

veterinariaC.anniadirVeterinaria = (function (req, res) {
    var obj = new veterinariaModel({
        img: req.body.img,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion
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

veterinariaC.getVeterinaria = (function (req, res) {
    veterinariaModel.find({ nombre: req.params.nombre }, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

module.exports = veterinariaC;