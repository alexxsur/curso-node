const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// https://rapidapi.com/dev132/api/city-geo-location-lookup

const encodeURL = encodeURI(argv.direccion);
console.log(encodeURL);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
    headers: { 'x-rapidapi-key': '97a24c9530msha2372c0c0439c28p1bdf3djsn05a38a3fef6e' }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('ERROR!!!!', err);
    });