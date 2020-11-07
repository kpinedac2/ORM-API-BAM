
module.exports = (sequelize, Sequelize) => {
    const PS_Persona = sequelize.define("PS_Persona", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        PrimerNombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        SegundoNombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        PrimerApellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        SegundoApellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        DPI: {
            type: Sequelize.STRING
        },
        Nacimiento: {
            type: Sequelize.DATE
        },
        TipoPersona: {
            type: Sequelize.ENUM,
            values: [
                'Cliente',
                'Gerente',
            ],
            defaultValue: 'Cliente',
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
    return PS_Persona;
};