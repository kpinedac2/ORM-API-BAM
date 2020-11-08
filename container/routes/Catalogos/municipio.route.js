const express = require('express');
const chequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarMunicipio, actualizarMunicipio, getAll, create } = require('../../controllers/Catalogos/municipio.controller');


router.use(chequeoAutenticacion);

router
    .route('/:Id')
    .get(getById)
    .delete(eliminarMunicipio)
    .put(actualizarMunicipio);

router
    .route('/')
    .get(getAll)
    .post(create);

module.exports = router;