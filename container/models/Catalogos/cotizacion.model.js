
module.exports = (sequelize, Sequelize) => {
    const CA_Cotizaciones = sequelize.define('CA_Cotizaciones', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Ingresos: {
            type: Sequelize.DECIMAL(20, 6),
            allowNull: true
        },
        Precio: {
            type: Sequelize.DECIMAL(20, 6),
            allowNull: true
        },
        NumPersonalCargo: {
            type: Sequelize.INTEGER
        },
        Estado: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Activo',
                'Cancelado',
                'Finalizado'
            ],
            defaultValue: 'Activo',
        }
    });
    return CA_Cotizaciones;
};