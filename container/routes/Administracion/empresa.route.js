const express = require('express');
const ChequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarEmpresa, actualizarEmpresa, getAll, create } = require('../../controllers/Administracion/empresa.controller');


router.use(ChequeoAutenticacion);

router
    .route('/:Id')
    .get(getById)
    .delete(eliminarEmpresa)
    .put(actualizarEmpresa);

router
    .route('/')
    .get(getAll)
    .post(create);

module.exports = router;