const express = require('express');
const chequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarContacto, actualizarContacto, getAll, create } = require('../../controllers/Catalogos/contacto.controller');


router.use(chequeoAutenticacion);
/**
 * @swagger
 * /catalogos/contacto/{Id}:
 *   get:
 *     summary: "Obtener un contacto por su identificador"
 *     description: Obtener un contacto en base a su identificador
 *     tags: [Contacto]
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
 * /catalogos/contacto/{Id}:
 *   delete:
 *     summary: "Eliminar un contacto por su identificador"
 *     description: Eliminar un contacto en base a su identificador
 *     tags: [Contacto]
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
router.route('/:Id').delete(eliminarContacto)

/**
 * @swagger
 * /catalogos/contacto/{Id}:
 *   put:
 *     summary: "Actualizar un contacto por su identificador"
 *     description: Actualizar un contacto en base a su identificador
 *     tags: [Contacto]
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
router.route('/:Id').put(actualizarContacto);

/**
 * @swagger
 * /catalogos/contacto/:
 *   get:
 *     summary: "Obtener contactos"
 *     description: Obtener todos los contactos disponibles
 *     tags: [Contacto]
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
 * /catalogos/contacto/:
 *   post:
 *     summary: "Creación de contacto"
 *     description: Crear un contacto nuevo
 *     tags: [Contacto]
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