const express = require('express');
const chequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarVehiculo, actualizarVehiculo, getAll, create } = require('../../controllers/Catalogos/vehiculo.controller');


router.use(chequeoAutenticacion);

/**
 * @swagger
 * /catalogos/vehiculo/{Id}:
 *   get:
 *     summary: "Obtener un vehículo por su identificador"
 *     description: Obtener un vehículo en base a su identificador
 *     tags: [Vehiculo]
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
 * /catalogos/vehiculo/{Id}:
 *   delete:
 *     summary: "Borrar un vehículo por su identificador"
 *     description: Borrar un vehículo en base a su identificador
 *     tags: [Vehiculo]
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
router.route('/:Id').delete(eliminarVehiculo)

/**
 * @swagger
 * /catalogos/vehiculo/{Id}:
 *   put:
 *     summary: "Actualizar un vehículo por su identificador"
 *     description: Actualizar un vehículo en base a su identificador
 *     tags: [Vehiculo]
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
router.route('/:Id').put(actualizarVehiculo);

/**
 * @swagger
 * /catalogos/vehiculo/:
 *   get:
 *     summary: "Obtener vehículos"
 *     description: Obtener todos los vehículos disponibles
 *     tags: [Vehiculo]
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
router.route('/').get(getAll);

/**
 * @swagger
 * /catalogos/vehiculo/:
 *   post:
 *     summary: "Crear un vehículo"
 *     description: Crear un nuevo vehículo
 *     tags: [Vehiculo]
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
router.route('/').post(create);

module.exports = router;