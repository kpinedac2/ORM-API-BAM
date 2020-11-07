module.exports = (sequelize, Sequelize) => {
    const CA_Departamentos = sequelize.define('CA_Departamentos', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Estado: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Activo',
                'Inactivo',
            ],
            defaultValue: 'Activo',
        }
    });
    return CA_Departamentos;
};