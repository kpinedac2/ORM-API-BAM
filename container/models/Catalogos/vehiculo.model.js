
module.exports = (sequelize, Sequelize) => {
    const CA_Vehiculos = sequelize.define('CA_Vehiculos', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Marca: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Color: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Anio: {
            type: Sequelize.INTEGER
        },
        Tracccion: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Efectivo',
                'Credito'
            ],
            defaultValue: 'Efectivo',
        },
        TipoVehiculo: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Motocicleta',
                'Automovil',
                'Pickup'
            ],
            defaultValue: 'Motocicleta',
        },

        TipoPago: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Efectivo',
                'Credito'
            ],
            defaultValue: 'Efectivo',
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
    return CA_Vehiculos;
};