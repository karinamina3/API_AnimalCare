var express = require('express');
var router = express.Router();
var enfermedadC= require('../controller/enfermedadController');

router.get('/', enfermedadC.getAll);

router.post('/', enfermedadC.anniadirEnfermedad);

module.exports = router;