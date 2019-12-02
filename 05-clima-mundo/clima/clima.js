const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b2f973f82eb06d08c20f3f593065a311&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}