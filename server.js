const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views');

app.get('/',async (req, res) => {
  const html = ReactDOMServer.renderToString(
    React.createElement('h1', null, '¡Bienvenido a mi app')
  );

  const header = await ejs.renderFile(__dirname + '/views/header.ejs');
  const footer = await ejs.renderFile(__dirname + '/views/footer.ejs');
  

  res.render('index.ejs', { header, footer, content: html }); // Renderizar la plantilla principal (index.ejs) con las variables necesarias
});

app.use('/client.js', express.static('client.js'));

app.listen(3000, () => {
  console.log('Servidor de renderizado iniciado en http://localhost:3000');
});
