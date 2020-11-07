
module.exports = (sequelize, Sequelize) => {
    const Admin_Empresas = sequelize.define('Admin_Empresas', {
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
        TipoEmpresa: {
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
    return Admin_Empresas;
};