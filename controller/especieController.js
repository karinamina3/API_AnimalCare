const mongoose = require('mongoose');
const especieModel = require('../models/Especie')

var especieC = {};

especieC.getAll = (function (req, res) {
    especieModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            console.log('successful')
            res.status(200).json(datos);
        }
    })
})

especieC.getEspecie = (function (req, res) {
    especieModel.find({ nombreEspecie: req.params.nombreEspecie }, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

especieC.getRaza = function (req, res) {
    especieModel.findOne({ nombreEspecie: req.params.nombreEspecie }, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            let razas = datos.raza;
            let aux = [];
            razas.forEach(function (r) {
                if (r.nombre === req.params.nombreRaza) {
                    aux = r;
                }
            });
            res.status(200).json(aux);
        }
    });
};

especieC.anniadirEspecie = (function (req, res) {
    var obj = new especieModel({
        nombreEspecie: req.body.nombreEspecie,        
        raza: []
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

especieC.anniadirRaza = (function (req, res) {
    var nombreEspecie = req.params.nombreEspecie;
    var obj = {
        img: req.body.img,
        nombre: req.body.nombre,
        origen: req.body.origen,
        descripcion: req.body.descripcion,
        pelo: req.body.pelo,
        aseo: req.body.aseo,
        tamanio: req.body.tamanio,
        ruidoso: req.body.ruidoso,
        personalidad: req.body.personalidad,
        salud: req.body.salud,
        nutricion: req.body.nutricion        
    };
    especieModel.findOneAndUpdate(
        { nombreEspecie: nombreEspecie },
        {
            $push: {
                raza: obj
            }
        },
        { safe: true, upsert: true, new: true },
        function (err, model) {
            if (err) {
                res.status(500).json({ msj: 'No se pudo insertar ', err, status: 500 });
            } else {
                res.status(200).json({ status: 200, model });
            }
        }
    );
});

module.exports = especieC;
