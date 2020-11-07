var express = require("express"),
    router = express.Router();
var extencion = require('./extenciones');



/** importando el modulo de rutas **/
const usuario = require("./Administracion/usuario.route");
const empresa = require("./Administracion/empresa.route");
const persona = require("./Personal/persona.route");

/**definiendo la ruta que nos brindara acceso al backend */
router.use(extencion.Admin + '/usuario', usuario);
router.use(extencion.Admin + '/empresa', empresa);
router.use(extencion.Personal + '/persona', persona);
module.exports = router;