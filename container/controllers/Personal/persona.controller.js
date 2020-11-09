const baseDatos = require("../../config/baseDatos.config");
const Persona = baseDatos.Persona;

exports.create = (req, res) => {
    console.log(req.body)
    Persona.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};



exports.getAll = (req, res) => {
    Persona.findAndCountAll({
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
    Persona.findByPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.actualizarPersona = (req, res) => {
    console.log(req.body)
    Persona.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.eliminarPersona = (req, res) => {
    const id = req.params.Id;
    Persona.destroy({
        where: { id: id },
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
