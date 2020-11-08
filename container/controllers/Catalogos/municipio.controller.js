const baseDatos = require("../../config/baseDatos.config");
const Municipio = baseDatos.Municipio;

exports.getAll = (req, res) => {
    Municipio.findAndCountAll({
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
    Municipio.finbaseDatosyPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.create = (req, res) => {
    Municipio.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.actualizarMunicipio = (req, res) => {
    Municipio.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.eliminarMunicipio = (req, res) => {
    const id = req.params.Id;
    Municipio.destroy({
        where: { id: id }
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
