//semplice web server
//modulo http
const http = require ('http');

//comportamento web server con call back
const server = http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Ciao World!</h1>');
    res.end();
})
//in ascolto
//server.listen(porta,url);

server.listen(8081, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8081/');