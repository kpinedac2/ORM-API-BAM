var express = require("express"),
    router = express.Router();
var recurso = require('./recursos');



/** importando el modulo de rutas **/
const usuario = require("./Administracion/usuario.route");
const empresa = require("./Administracion/empresa.route");

/**importando modulo de Personal */
const persona = require("./Personal/persona.route");

/**importando modulo de catalogos */
const cotizacion = require("./Catalogos/cotizacion.route");
const departamento = require("./Catalogos/departamento.route");
const municipio = require("./Catalogos/municipio.route");
const contacto = require("./Catalogos/municipio.route");
const vehiculo = require("./Catalogos/vehiculo.route");

/**definiendo la ruta que nos brindara acceso al backend */
router.use(recurso.Admin + '/usuario', usuario);
router.use(recurso.Admin + '/empresa', empresa);

/**rutas de personal */
router.use(recurso.Personal + '/persona', persona);

/**rutas de catalogos */
router.use(recurso.Catalogos + '/cotizacion', cotizacion);
router.use(recurso.Catalogos + '/departamento', departamento);
router.use(recurso.Catalogos + '/municipio', municipio);
router.use(recurso.Catalogos + '/contacto', contacto);
router.use(recurso.Catalogos + '/vehiculo', vehiculo);

module.exports = router;