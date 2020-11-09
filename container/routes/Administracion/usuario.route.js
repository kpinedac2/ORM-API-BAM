const express = require('express');
const ChequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarUsuario, updated,
    getAll, create, Login } = require('../../controllers/Administracion/usuario.controller');

//router.use(ChequeoAutenticacion);
router
    .post('/auth', Login);
router
    .route('/:Id')
    .get(getById)
    .delete(eliminarUsuario)
    .put(updated);

router
    .route('/')
    .get(getAll)
    .post(create);

module.exports = router;