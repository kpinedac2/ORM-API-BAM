const express = require('express');
const chequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarMunicipio, actualizarMunicipio, getAll, create } = require('../../controllers/Catalogos/municipio.controller');


router.use(chequeoAutenticacion);

/**
 * @swagger
 * /catalogos/municipio/{Id}:
 *   get:
 *     summary: "Obtener un municipio por su identificador"
 *     description: Obtener un municipio en base a su identificador
 *     tags: [Municipio]
 *     security:
 *         - Bearer: []
 *     parameters:
 *       - $ref: "#/parameters/idPath"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/:Id').get(getById);

/**
 * @swagger
 * /catalogos/municipio/{Id}:
 *   delete:
 *     summary: "Borrar un municipio por su identificador"
 *     description: Borrar un municipio en base a su identificador
 *     tags: [Municipio]
 *     security:
 *         - Bearer: []
 *     parameters:
 *       - $ref: "#/parameters/idPath"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/:Id').delete(eliminarMunicipio);

/**
 * @swagger
 * /catalogos/municipio/{Id}:
 *   put:
 *     summary: "Actualizar un municipio por su identificador"
 *     description: Actualizar un municipio en base a su identificador
 *     tags: [Municipio]
 *     security:
 *         - Bearer: []
 *     parameters:
 *       - $ref: "#/parameters/idPath"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/:Id').put(actualizarMunicipio);

/**
 * @swagger
 * /catalogos/municipio/:
 *   get:
 *     summary: "Obtener municipios"
 *     description: Obtener municipios disponibles
 *     tags: [Municipio]
 *     security:
 *         - Bearer: []
 *     parameters:
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/').get(getAll)

/**
 * @swagger
 * /catalogos/municipio/:
 *   post:
 *     summary: "Crear un municipio"
 *     description: Crear un nuevo municipio disponible
 *     tags: [Municipio]
 *     security:
 *         - Bearer: []
 *     parameters:
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/').post(create);

module.exports = router;