
const Sequelize = require("sequelize");
/**configuracion de la conexion a la base de datos */
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

/**Generacion de las entidades */
baseDatos.sequelize.sync({ force: true }).then(() => {
    console.log("Creacion de Entidades Automatizada");
}).catch(error => {
    console.log(error.message);
});

/**Modelos de la parte administrativa**/
/**Obteniendo el modelo de usuarios y empresas */
baseDatos.Usuario = require("../models/Administracion/usuario.model")(sequelize, Sequelize);
baseDatos.Empresa = require("../models/Administracion/empresa.model")(sequelize, Sequelize);


/**Modelos de la parte personal */
baseDatos.Persona = require("../models/Personal/persona.model")(sequelize, Sequelize);


/**Modelos de catalogos */
baseDatos.Cotizacion = require("../models/Catalogos/cotizacion.model")(sequelize, Sequelize);
baseDatos.Departamento = require("../models/Catalogos/departamento.model")(sequelize, Sequelize);


/**Relaciones de persona  */
baseDatos.Persona.hasOne(baseDatos.Usuario, {
    foreignKey: { allowNull: false },
    onDelete: "RESTRICT",
});

baseDatos.Persona.hasMany(baseDatos.Empresa, {
    foreignKey: { allowNull: true },
    onDelete: "RESTRICT",
});

baseDatos.Persona.hasMany(baseDatos.Cotizacion, {
    foreignKey: { name: "ClienteId", allowNull: true },
    onDelete: "RESTRICT",
});




/**Relacion Empresa */
baseDatos.Empresa.belongsTo(baseDatos.Persona);
baseDatos.Empresa.hasMany(baseDatos.Cotizacion, {
    foreignKey: { allowNull: true },
    onDelete: "RESTRICT",
});

/**Relacion de catalogos */
baseDatos.Cotizacion.belongsTo(baseDatos.Empresa);

baseDatos.Cotizacion.belongsTo(baseDatos.Persona, {
    as: "Cliente",
    foreignKey: { name: "ClienteId", allowNull: true },
});



module.exports = baseDatos;

