const express = require('express');
const ChequeoAutenticacion = require('../../midleware/checkout');
const router = express.Router();
const { getById, eliminarUsuario, updated,
    getAll, create, Login } = require('../../controllers/Administracion/usuario.controller');

//router.use(ChequeoAutenticacion);

router.post('/auth', Login);

/**
 * @swagger
 * /administracion/usuario/{Id}:
 *   get:
 *     summary: "Obtener un usuario por su identificador"
 *     description: Obtener un usuario por su identificador
 *     tags: [Usuario]
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
 * /administracion/usuario/{Id}:
 *   delete:
 *     summary: "Borrar un usuario por su identificador"
 *     description: Borrar un usuario por su identificador
 *     tags: [Usuario]
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
router.route('/:Id').delete(eliminarUsuario);

/**
 * @swagger
 * /administracion/usuario/{Id}:
 *   put:
 *     summary: "Actualizar un usuario por su identificador"
 *     description: Actualizar un usuario por su identificador
 *     tags: [Usuario]
 *     security:
 *         - Bearer: []
 *     parameters:
 *       - $ref: "#/parameters/idPath"
 *       - $ref: "#/parameters/usuarioPutBody"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/:Id').put(updated);

/**
 * @swagger
 * /administracion/usuario/:
 *   get:
 *     summary: "Obtener usuarios"
 *     description: Obtener usuarios
 *     tags: [Usuario]
 *     security:
 *         - Bearer: []
 *     parameters:
 *       - $ref: "#/parameters/usuarioPostBody"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/').get(getAll)

/**
 * @swagger
 * /administracion/usuario/:
 *   post:
 *     summary: "Crear usuario"
 *     description: Crear un nuevo usuario
 *     tags: [Usuario]
 *     security:
 *         - Bearer: []
 *     parameters:
 *       - $ref: "#/parameters/usuarioPostBody"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route('/').post(create);

module.exports = router;