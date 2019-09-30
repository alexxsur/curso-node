// requireds
const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        for (let i = 0; i <= 10; i++) {
            data += `${ base } * ${ i } = ${ i * base } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo
}