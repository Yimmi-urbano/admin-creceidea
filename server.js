const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ejs = require('ejs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Ruta para la página de inicio
app.get('/', async (req, res) => {
  const html = ReactDOMServer.renderToString(
    React.createElement('h1', null, '¡Hola desde el servidor!')
  );

  const header = await ejs.renderFile(path.join(__dirname, '/views/header.ejs'));
  const footer = await ejs.renderFile(path.join(__dirname, '/views/footer.ejs'));

  res.render('index.ejs', { header, footer, content: html });
});

// Ruta para la página de productos
app.get('/productos', async (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 15 },
    { id: 3, nombre: 'Producto 3', precio: 20 },
  ];

  const productList = await ejs.renderFile(path.join(__dirname, '/views/modulos/productList.ejs'), { productos });
  const header = await ejs.renderFile(path.join(__dirname, '/views/header.ejs'));
  const footer = await ejs.renderFile(path.join(__dirname, '/views/footer.ejs'));

  res.render('index.ejs', { header, footer, content: productList });
});

app.use('/client.js', express.static('client.js'));

app.listen(3000, () => {
  console.log('Servidor de renderizado iniciado en http://localhost:3000');
});
