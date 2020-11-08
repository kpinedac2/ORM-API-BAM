const baseDatos = require("../../config/baseDatos.config");
const Contacto = baseDatos.Contacto;


exports.getAll = (req, res) => {
    Contacto.findAndCountAll({
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
    Contacto.finbaseDatosyPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.create = (req, res) => {
    Contacto.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.actualizarContacto = (req, res) => {
    Contacto.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.eliminarContacto = (req, res) => {
    const id = req.params.Id;
    Contacto.destroy({
        where: { id: id },
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
