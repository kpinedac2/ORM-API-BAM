const express = require('express');
const chequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarDepartamento, actualizarDepartamento, getAll, create } = require('../../controllers/Catalogos/departamento.controller');


router.use(chequeoAutenticacion);

router
    .route('/:Id')
    .get(getById)
    .delete(eliminarDepartamento)
    .put(actualizarDepartamento);

router
    .route('/')
    .get(getAll)
    .post(create);

module.exports = router;