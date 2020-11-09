const express = require('express');
const chequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarDepartamento, actualizarDepartamento, getAll, create } = require('../../controllers/Catalogos/departamento.controller');


router.use(chequeoAutenticacion);

/**
 * @swagger
 * /catalogos/departamento/{Id}:
 *   get:
 *     summary: "Obtener un departamento por su identificador"
 *     description: Obtener un departamento en base a su identificador
 *     tags: [Departamento]
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
router.route('/:Id').get(getById)

/**
 * @swagger
 * /catalogos/departamento/{Id}:
 *   delete:
 *     summary: "Borrar un departamento por su identificador"
 *     description: Borrar un departamento en base a su identificador
 *     tags: [Departamento]
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
router.route('/:Id').delete(eliminarDepartamento)

/**
 * @swagger
 * /catalogos/departamento/{Id}:
 *   delete:
 *     summary: "Actualizar un departamento por su identificador"
 *     description: Actualizar un departamento en base a su identificador
 *     tags: [Departamento]
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
router.route('/:Id').put(actualizarDepartamento);

/**
 * @swagger
 * /catalogos/departamento/:
 *   get:
 *     summary: "Obtener departamentos"
 *     description: Obtener todos los departamentos disponibles
 *     tags: [Departamento]
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
 * /catalogos/departamento/:
 *   post:
 *     summary: "Crear un departamento"
 *     description: Crear nuevo departamento
 *     tags: [Departamento]
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