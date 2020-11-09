const baseDatos = require("../../config/baseDatos.config");
const usuario = baseDatos.Usuario;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.Login = (req, res, next) => {
    usuario.findOne({
        where: { Email: req.body.Email },
    })
        .then((user) => {
            if (user) {
                bcryptjs.compare(req.body.Password, user.Password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Autenticacion fallida",
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                Email: user.Email,
                                UserId: user.id,
                            },
                            process.env.JWT_KEY,
                            { expiresIn: process.env.TTEXPIRA + "h" }
                        );

                        return res.status(200).json({
                            message: "Autenticacion Exitosa!",
                            token: token,
                        });
                    }
                    res.status(401).json({
                        message: "Autenticacion fallida",
                    });
                });
            } else {
                res.status(404).json({ message: "Autenticacion fallida", });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.create = (req, res) => {

    req.body.Password = bcryptjs.hashSync(req.body.Password, bcryptjs.genSaltSync(8));
    usuario.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.getAll = (req, res) => {
    usuario.findAndCountAll({
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
    usuario.finbaseDatosyPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.updated = (req, res) => {
    usuario.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.eliminarUsuario = (req, res) => {
    const id = req.params.Id;
    usuario.destroy({
        where: { id: id },
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
