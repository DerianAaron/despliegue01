require('dotenv').config();
const http = require('http');

// Controlador de la solicitud
function requestController(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bienvenidos al curso');
  console.log('Bienvenidos al curso');
}

// Crear servidor HTTP
const server = http.createServer(requestController);

// Configurar puerto dinámico (Render) o 3000 en local
const PORT = process.env.PORT || 3000;

// Escuchar en todas las interfaces (requerido por Render)
server.listen(PORT, '0.0.0.0', function () {
  console.log("✅ Aplicación corriendo en el puerto: " + PORT);
});
