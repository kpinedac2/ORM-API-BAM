const baseDatos = require("../../config/baseDatos.config");
const Departamento = baseDatos.Departamento;

exports.findAll = (req, res) => {
    Departamento.findAndCountAll({
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
    Departamento.finbaseDatosyPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.create = (req, res) => {
    Departamento.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};







exports.actualizarDepartamento = (req, res) => {
    Departamento.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.EliminarDepartamento = (req, res) => {
    const id = req.params.Id;
    Departamento.destroy({
        where: { id: id }
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
