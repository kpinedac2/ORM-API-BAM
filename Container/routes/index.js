var express = require("express"),
    router = express.Router();
var swaggerUi = require("swagger-ui-express");
var extencion = require('./extenciones');



/** importando el modulo de rutas **/
const usuario = require("./Administracion/usuario.route");
const persona = require("./Personal/persona.route");

/**definiendo la ruta que nos brindara acceso al backend */
router.use(extencion.Admin + '/usuarios', usuario);
router.use(extencion.Personal + '/persona', persona);
module.exports = router;