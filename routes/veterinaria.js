var express = require('express');
var router = express.Router();
var veterinariaC = require('../controller/veterinariaController');

router.get('/', veterinariaC.getAll);

router.get('/:nombre', veterinariaC.getVeterinaria);

router.post('/', veterinariaC.anniadirVeterinaria);

module.exports = router;