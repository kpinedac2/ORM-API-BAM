const express = require('express');
const ChequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarCotizacion, actualizarCotizacion, getAll, create } = require('../../controllers/Catalogos/cotizacion.controller');

/**usando el midleware */
router.use(ChequeoAutenticacion);

/**
 * @swagger
 * /catalogos/cotizacion/{Id}:
 *   get:
 *     summary: "Obtener un contacto por su identificador"
 *     description: Obtener un contacto en base a su identificador
 *     tags: [Cotizacion]
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
 * /catalogos/cotizacion/{Id}:
 *   delete:
 *     summary: "Eliminar un contacto por su identificador"
 *     description: Eliminar un contacto en base a su identificador
 *     tags: [Cotizacion]
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
router.route('/:Id').delete(eliminarCotizacion)

/**
 * @swagger
 * /catalogos/cotizacion/{Id}:
 *   put:
 *     summary: "Actualizar un contacto por su identificador"
 *     description: Actualizar un contacto en base a su identificador
 *     tags: [Cotizacion]
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
router.route('/:Id').put(actualizarCotizacion);

/**
 * @swagger
 * /catalogos/cotizacion/:
 *   get:
 *     summary: "Obtener cotizaciones"
 *     description: Obtener todas las cotizaciones
 *     tags: [Cotizacion]
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
 * /catalogos/cotizacion/:
 *   post:
 *     summary: "Crear cotización"
 *     description: Crear una cotización
 *     tags: [Cotizacion]
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