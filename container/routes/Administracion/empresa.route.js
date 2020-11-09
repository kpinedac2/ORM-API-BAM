const express = require('express');
const ChequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarEmpresa, actualizarEmpresa, getAll, create } = require('../../controllers/Administracion/empresa.controller');


router.use(ChequeoAutenticacion);

/**
 * @swagger
 * /administracion/empresa/{Id}:
 *   get:
 *     summary: "Obtener una empresa por su identificador"
 *     description: Obtener un empresa en base a su identificador
 *     tags: [Empresa]
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
 * /administracion/empresa/{Id}:
 *   delete:
 *     summary: "Eliminar una empresa por su identificador"
 *     description: Eliminar un empresa en base a su identificador
 *     tags: [Empresa]
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
router.route('/:Id').delete(eliminarEmpresa)

/**
 * @swagger
 * /administracion/empresa/{Id}:
 *   put:
 *     summary: "Actualizar una empresa por su identificador"
 *     description: Actualizar un empresa en base a su identificador
 *     tags: [Empresa]
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
router.route('/:Id').put(actualizarEmpresa);

/**
 * @swagger
 * /administracion/empresa/:
 *   get:
 *     summary: "Obtener empresas"
 *     description: Obtener varias empresas
 *     tags: [Empresa]
 *     security:
 *         - Bearer: []
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/').get(getAll)

/**
 * @swagger
 * /administracion/empresa/:
 *   post:
 *     summary: "Obtener empresas"
 *     description: Obtener varias empresas
 *     tags: [Empresa]
 *     security:
 *         - Bearer: []
 *     parameters:
 *       - $ref: "#/parameters/empresaPostBody"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/').post(create);

module.exports = router;