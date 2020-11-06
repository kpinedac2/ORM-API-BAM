
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

const db = {};
sequelize.options.logging = false;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: true }).then(() => {
    console.log("Generado exitosamente");
}).catch(error => {
    console.log(error.message);
});

/**Modelos de la parte administrativa**/
/**Obteniendo el modelo de usuarios y empresas */
db.Usuario = require("../models/Administracion/usuario.model")(sequelize, Sequelize);
db.Empresa = require("../models/Administracion/empresa.model")(sequelize, Sequelize);


module.exports = db;

