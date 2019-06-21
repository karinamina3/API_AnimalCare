const mongoose = require('mongoose');
const leyModel = require('../models/Ley')

var leyC = {};

leyC.getAll = (function (req, res) {
    leyModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

leyC.anniadirLey = (function (req, res) {
    var obj = new leyModel({
        apartado: req.body.apartado,
        articulo: req.body.articulo
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

leyC.getArticulo = (function (req, res) {
    leyModel.find({ articulo: req.params.articulo }, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

module.exports = leyC;