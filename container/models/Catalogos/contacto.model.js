
module.exports = (sequelize, Sequelize) => {
    const CA_contactos = sequelize.define("CA_contactos", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Tipo: {
            type: Sequelize.ENUM,
            values: [
                'Direccion',
                'Email',
                'Movil',
                'Telefono',
            ],
            defaultValue: 'Telefono',
            allowNull: false
        },
        Contacto: {
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
        },
    });
    return CA_contactos;
};