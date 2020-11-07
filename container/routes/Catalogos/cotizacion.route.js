const express = require('express');
const ChequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarCotizacion, actualizarCotizacion, getAll, create } = require('../../controllers/Catalogos/cotizacion.controller');

/**usando el midleware */
router.use(ChequeoAutenticacion);

router
    .route('/:Id')
    .get(getById)
    .delete(eliminarCotizacion)
    .put(actualizarCotizacion);

router
    .route('/')
    .get(getAll)
    .post(create);

module.exports = router;