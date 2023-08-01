require('dotenv').config();
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ejs = require('ejs');
const path = require('path');
const fetch = require('isomorphic-fetch');
const urlcdn =  "https://tiendas.agencsi.com";
const cdnStorage = "https://tiendas.agencsi.com/storage";
const requestedDomain = "hoppedidos.com" //req.get('host');

const app = express();
function generarCodigoAleatorioConTimestamp() {
  const codigoAleatorio = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  const timestamp = Date.now();
  const codigoFinal = `${codigoAleatorio}${timestamp}`;
  return codigoFinal;
}

const version = generarCodigoAleatorioConTimestamp();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', async (req, res) => {
 
  const html = ReactDOMServer.renderToString(
    React.createElement('h1', null, '¡Hola desde el servidor! ' + requestedDomain)
  );
  const header = await ejs.renderFile(path.join(__dirname, '/views/header.ejs'));
  const footer = await ejs.renderFile(path.join(__dirname, '/views/footer.ejs'));
  //const componentsRender = await fetchAndPrintPaths() || " ";
  //const infoStore= await get_store() || " ";

  res.render('index.ejs', {
    header,
    footer,
    //components: componentsRender,
    content: html,
    domain: requestedDomain,
    urldcdn: urlcdn,
    cdnstorage: cdnStorage,
    version
    //infoStore
  });

});


app.listen(3002, () => {
  console.log('Servidor de renderizado iniciado en http://localhost:3002');
});
