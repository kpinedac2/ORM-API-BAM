const fs = require("fs");

function saveJSON(json_file) {
    //create if not exist folder
    if (!fs.existsSync("./swagger")) fs.mkdirSync(`./swagger`);

    fs.writeFileSync("./swagger/swagger.json", json_file, "utf8", function (err) {
        if (err)
            return reject("Hubo un error al escribir el archivo.");
        console.log("Archivo de Swagger Generado!");
        resolve(true);
    });
}

module.exports.saveJSON = saveJSON;