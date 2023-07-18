const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs'); // Configuración de EJS como el motor de vistas
app.set('views', __dirname + '/views'); // Directorio de las plantillas

app.get('/',async (req, res) => {
  const html = ReactDOMServer.renderToString(
    React.createElement('h1', null, '¡Hola desde el servidossssr!')
  );

  const header = await ejs.renderFile(__dirname + '/views/header.ejs'); // Renderizar la plantilla del encabezado
  const footer = await ejs.renderFile(__dirname + '/views/footer.ejs'); // Renderizar la plantilla del pie de página
  

  res.render('index.ejs', { header, footer, content: html }); // Renderizar la plantilla principal (index.ejs) con las variables necesarias
});

app.use('/client.js', express.static('client.js'));

app.listen(3000, () => {
  console.log('Servidor de renderizado iniciado en http://localhost:3000');
});
