const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

/* app.get('/', (req, res) => {
    // res.send('Hello World')

    let salida = {
        nombre: 'Alex',
        edad: 31,
        url: req.url
    }

    res.send(salida);
}) */

app.get('/data', (req, res) => {

    res.send('Hello Data')
})



app.listen(3000, () => {
    console.log("Escuchando peticiones en el puerto 3000");
});