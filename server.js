const express = require('express');
const ejs = require('ejs');
const path = require('path'); // Importa el módulo 'path'

const app = express();

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Definir una ruta para la página principal
app.get('/', (req, res) => {
  // Definir los parámetros que deseas enviar al encabezado y al pie de página
  const headerParams = { username: 'Usuario123' };
  const footerParams = { currentYear: new Date().getFullYear() };

  // Renderizar el archivo 'index.ejs' y pasar los parámetros
  res.render('index', { title: 'CreceIdea', headerParams, footerParams });
});


app.use('/public', express.static(path.join(__dirname, 'public')));


// Iniciar el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
