const http = require('http'); // Este paquete viene con node, no se requiere npm install

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: "Santiago",
        edad: 25,
        url: req.url
    };

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log('Escuchando puerto 8080');