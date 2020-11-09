const baseDatos = require("../../config/baseDatos.config");
const Vehiculo = baseDatos.Vehiculo;

exports.getAll = (req, res) => {
    Vehiculo.findAndCountAll({
        order: [["createdAt", "DESC"]],
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getById = (req, res) => {
    Vehiculo.findByPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.create = (req, res) => {
    Vehiculo.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.actualizarVehiculo = (req, res) => {
    Vehiculo.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.eliminarVehiculo = (req, res) => {
    const id = req.params.Id;
    Vehiculo.destroy({
        where: { id: id },
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
