const express = require('express');
const router = express.Router();
const { getById, eliminarPersona, actualizarPersona, getAll, create } = require('../../controllers/Personal/persona.controller');

/**
 * @swagger
 * /personal/persona/{Id}:
 *   get:
 *     summary: "Obtener una persona por su identificador"
 *     description: Obtener una persona en base a su identificador
 *     tags: [Persona]
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
 * /personal/persona/{Id}:
 *   delete:
 *     summary: "Borrar una persona por su identificador"
 *     description: Borrar una persona en base a su identificador
 *     tags: [Persona]
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
router.route('/:Id').delete(eliminarPersona)

/**
 * @swagger
 * /personal/persona/{Id}:
 *   put:
 *     summary: "Actualizar una persona por su identificador"
 *     description: Actualizar una persona en base a su identificador
 *     tags: [Persona]
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
router.route('/:Id').put(actualizarPersona);

/**
 * @swagger
 * /personal/persona/:
 *   get:
 *     summary: "Obtener personas"
 *     description: Obtener todas las personas disponibles
 *     tags: [Persona]
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
 * /personal/persona/:
 *   get:
 *     summary: "Crear persona"
 *     description: Crear una nueva persona
 *     tags: [Persona]
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