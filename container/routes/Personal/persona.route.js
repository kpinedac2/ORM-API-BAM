const express = require('express');
const router = express.Router();
const { getById, eliminarPersona, actualizarPersona, getAll, create } = require('../../controllers/Personal/persona.controller');

router
    .route('/:Id')
    .get(getById)
    .delete(eliminarPersona)
    .put(actualizarPersona);

router
    .route('/')
    .get(getAll)
    .post(create);

module.exports = router;