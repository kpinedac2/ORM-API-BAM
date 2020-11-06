
module.exports = (sequelize, Sequelize) => {
    const Admin_Empresa = sequelize.define('Admin_Empresa', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Nombre: {
            type: Sequelize.STRING
        },
        Direccion: {
            type: Sequelize.STRING
        },
        DescripcionSocial: {
            type: Sequelize.STRING
        },
        Tipo: {
            type: Sequelize.ENUM,
            values: [
                'Instiucion',
                'Cliente',
                'Organizacion'
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
        }

    }
    );
    return Admin_Empresa;
};