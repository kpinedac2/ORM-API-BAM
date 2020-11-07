var express = require("express"),
    router = express.Router();
var extencion = require('./extenciones');



/** importando el modulo de rutas **/
const usuario = require("./Administracion/usuario.route");
const empresa = require("./Administracion/empresa.route");

/**importando modulo de Personal */
const persona = require("./Personal/persona.route");

/**importando modulo de catalogos */
const cotizacion = require("./Catalogos/cotizacion.route");

/**definiendo la ruta que nos brindara acceso al backend */
router.use(extencion.Admin + '/usuario', usuario);
router.use(extencion.Admin + '/empresa', empresa);

/**rutas de personal */
router.use(extencion.Personal + '/persona', persona);

/**rutas de catalogos */
router.use(extencion.Cotizacion + '/cotizacion', cotizacion);

module.exports = router;