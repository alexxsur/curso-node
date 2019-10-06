// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================='.green);
    console.log(`==== Tabla del ${ base } ===`.green);
    console.log('======================='.green);

    if (!Number(base)) {
        reject(`El valor introducido base ${ base } no es un número`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor introducido limite ${ limite } no es un número`);
        return;
    }

    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ i * base }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ i * base } \n`;
        }

        fs.writeFile(`tablas/tabla-del-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tablas/tabla-del-${ base }-al-${ limite }.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}