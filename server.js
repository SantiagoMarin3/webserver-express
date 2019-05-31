const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // let salida = {
    //     nombre: "Santiago",
    //     edad: 25,
    //     url: req.url
    // }
    // res.send(salida);

    res.render('home', {
        nombre: 'sanTiago'
    })
})

app.get('/about', function(req, res) {
    res.render('about', {});
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});