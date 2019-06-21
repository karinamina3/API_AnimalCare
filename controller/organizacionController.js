const mongoose = require('mongoose');
const OrganizacionModel = require('../models/Organizacion')

var orgaC = {};

orgaC.getAll = (function (req, res) {
    OrganizacionModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

orgaC.anniadirOrganizacion = (function (req, res) {
    var obj = new OrganizacionModel({
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

orgaC.getOrganizacion = (function (req, res) {
    OrganizacionModel.find({ nombre: req.params.nombre }, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

module.exports = orgaC;