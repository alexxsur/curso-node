const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// COMENTADO TEMPORALMENTE MIENTRAS SE SOLUCIONA ERROR API
/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */

/* clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {

    try {
        //let coords = await lugar.getLugarLatLng(argv.direccion); DEBUG se comentatemporalmente debido a fallo de API rapidapi

        /////// se agrega temporalmente para simular  respuesta dedbido a fallo de API rapidapi
        coords = {
                direccion: 'PRUEBA',
                lat: 40.750000,
                lng: -74.000000
            }
            //////

        let temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);