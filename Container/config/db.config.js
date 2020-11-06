
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

/**Models**/


module.exports = db;

