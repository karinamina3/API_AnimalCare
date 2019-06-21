var express = require('express');
var router = express.Router();
var curiosidadC= require('../controller/curiosidadController');

router.get('/', curiosidadC.getAll);

router.post('/', curiosidadC.anniadirCuriosidad);

module.exports = router;