
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.database,
    process.env.user,
    process.env.clave,
    {
        host: process.env.host,
        dialect: "mysql",
    }
);

const baseDatos = {};
sequelize.options.logging = false;
baseDatos.Sequelize = Sequelize;
baseDatos.sequelize = sequelize;

baseDatos.sequelize.sync({ force: true }).then(() => {
    console.log("Creacion de Entidades Automatizada");
}).catch(error => {
    console.log(error.message);
});

/**Modelos de la parte administrativa**/
/**Obteniendo el modelo de usuarios y empresas */
baseDatos.Usuario = require("../models/Administracion/usuario.model")(sequelize, Sequelize);
baseDatos.Empresa = require("../models/Administracion/empresa.model")(sequelize, Sequelize);


module.exports = baseDatos;

