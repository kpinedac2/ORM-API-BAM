const express = require('express');
const chequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarVehiculo, actualizarVehiculo, getAll, create } = require('../../controllers/Catalogos/vehiculo.controller');


router.use(chequeoAutenticacion);

router
    .route('/:Id')
    .get(getById)
    .delete(eliminarVehiculo)
    .put(actualizarVehiculo);

router
    .route('/')
    .get(getAll)
    .post(create);

module.exports = router;