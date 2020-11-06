var express = require("express"),
    router = express.Router();
var swaggerUi = require("swagger-ui-express");

/** Module **/
const usuario = require("./Administracion/usuario.route");
router.use('/usuarios', usuario);
module.exports = router;