
require('dotenv').config();
const express = require('express');

const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');
const colors = require('colors');

const swaggerJSDoc = require("swagger-jsdoc");
const json = require("./util/writeFile.util");
var swaggerUi = require("swagger-ui-express"),
  documentoSwagger = require("./swagger/swagger.json");
app.use(cors());


if (process.env.NODE_ENV != "test") {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/**
 * Configuracion de swagger
 */
app.use(favicon(path.join(__dirname, 'assets/images', 'BAM.ico')))

// Docu
const puerto = process.env.PUERTO_SWAGGER;
const nombre_docu = process.env.NOMBRE_SWAGGER;
const host = process.env.HOST_SWAGGER;

const swaggerDefinition = {
  info: {
    // Información de API (requerida)
    title: `API - ${nombre_docu}`, // Título (requerido)
    version: "1.0.0", // Versión (requerida)
    description: `Documentación de API ${nombre_docu}`, // Descripción (Opcional)
  },
  host: host + `:` + parseInt(puerto), // Host (Opcional)
  basePath: '/api', // Base path (Opcional)
  schemes: ["http", "https"],
}

const options = {
  swaggerDefinition,
  apis: [
    "./container/routes/**/*.js",
    "./swagger/definitions/*.definitions.yaml",
    "./swagger/parameters/*.parameters.yaml",
  ]
}

const swaggerSpec = swaggerJSDoc(options);

json.saveJSON(JSON.stringify(swaggerSpec));

app.use("/documentacion", swaggerUi.serve, swaggerUi.setup(documentoSwagger));
app.get("/", function (req, res, next) {
  res.redirect("/documentacion");
});

var routes = require('./container/routes/index');
app.use('/', routes);

app.use((req, res, net) => {
  const error = new Error('Not Found');
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;