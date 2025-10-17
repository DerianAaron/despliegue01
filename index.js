require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');

function requestController(req, res) {
  if (req.url === '/inicio') {
    // Ruta para la nueva página
    const filePath = path.join(__dirname, 'public', 'inicio.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Página por defecto (texto del laboratorio)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bienvenidos al curso');
  }
}

const server = http.createServer(requestController);

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', function () {
  console.log('✅ Aplicación corriendo en el puerto: ' + PORT);
});
