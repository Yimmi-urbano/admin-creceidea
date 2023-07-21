const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ejs = require('ejs');
const path = require('path');
const urlcdn = 'https://tiendas.agencsi.com'
const cdnStorage = urlcdn + '/storage';


function generarCodigoAleatorioConTimestamp() {

  const codigoAleatorio = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  const timestamp = Date.now();

  const codigoFinal = `${codigoAleatorio}${timestamp}`;

  return codigoFinal;
}

const version = generarCodigoAleatorioConTimestamp();


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', async (req, res) => {
  const requestedDomain = 'hoppedidos.com' //req.get('host');
  const html = ReactDOMServer.renderToString(
    React.createElement('h1', null, '¡Hola desde el servidor! ' + requestedDomain)
  );
  const header = await ejs.renderFile(path.join(__dirname, '/views/header.ejs'));
  const footer = await ejs.renderFile(path.join(__dirname, '/views/footer.ejs'));

  res.render('index.ejs', {
    header,
    footer,
    content: html,
    domain: requestedDomain,
    urldcdn: urlcdn,
    cdnstorage: cdnStorage,
    version
  });
});

app.get('/productos', async (req, res) => {
  const requestedDomain = 'hoppedidos.com' //req.get('host');
  const productos = [
    { id: 1, nombre: 'Producto ABC 1', precio: 10 },
    { id: 2, nombre: 'Producto ABC 2', precio: 15 },
    { id: 3, nombre: 'Producto ABC 3', precio: 20 },
  ];

  const productList = await ejs.renderFile(path.join(__dirname, '/views/modulos/productos/productList.ejs'), { productos });
  const header = await ejs.renderFile(path.join(__dirname, '/views/header.ejs'));
  const footer = await ejs.renderFile(path.join(__dirname, '/views/footer.ejs'));

  res.render('index.ejs', { header, footer, content: productList, title: requestedDomain });
});

app.use('/client.js', express.static('client.js'));

app.listen(3002, () => {
  console.log('Servidor de renderizado iniciado en http://localhost:3002');
});
