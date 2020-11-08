const express = require('express');
const chequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const {
    getById,
    eliminarContacto,
    actualizarContacto,
    getAll,
    create
} = require('../../controllers/TC/c_localizador');


router.use(chequeoAutenticacion);

router
    .route('/:Id')
    .get(getById)
    .delete(eliminarContacto)
    .put(actualizarContacto);

router
    .route('/')
    .get(getAll)
    .post(create);

module.exports = router;