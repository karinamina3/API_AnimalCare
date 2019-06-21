var express = require('express');
var router = express.Router();
var leyC = require('../controller/leyController');

router.get('/', leyC.getAll);

router.get('/:articulo', leyC.getArticulo);

router.post('/', leyC.anniadirLey);

module.exports = router;