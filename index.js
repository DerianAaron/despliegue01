require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');

function requestController(req, res) {
  // Cargar la página principal directamente en la raíz "/"
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
}

const server = http.createServer(requestController);

// Puerto asignado por Render o 3000 localmente
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log('🚀 Servidor ejecutándose en el puerto: ' + PORT);
});
