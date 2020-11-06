
module.exports = (sequelize, Sequelize) => {
    const Admin_Usuarios = sequelize.define('Admin_Usuarios', {
        /**Estructuracion de las propiedades de mi modelo */
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Correo: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Usuario: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        Estado: {
            type: Sequelize.ENUM,
            values: [
                'Activo',
                'Inactivo',
            ],
            defaultValue: 'Activo',
            allowNull: false
        }
    });
    return Admin_Usuarios;
};