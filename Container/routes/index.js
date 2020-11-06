var express = require("express"),
    router = express.Router();
var swaggerUi = require("swagger-ui-express");

const admin = '/api/administracion'
/** importando el modulo de rutas **/
const usuario = require("./Administracion/usuario.route");

/**definiendo la ruta que nos brindara acceso al backend */
router.use(admin + '/usuarios', usuario);
module.exports = router;