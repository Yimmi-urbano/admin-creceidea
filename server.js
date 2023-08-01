require('dotenv').config();
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ejs = require('ejs');
const path = require('path');
const urlcdn = process.env.URL_CDN;
const cdnStorage = process.env.CDN_STORAGE;
const requestedDomain = 'hoppedidos.com' //req.get('host');


function generarCodigoAleatorioConTimestamp() {
  const codigoAleatorio = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  const timestamp = Date.now();
  const codigoFinal = `${codigoAleatorio}${timestamp}`;
  return codigoFinal;
}

const version = generarCodigoAleatorioConTimestamp();

async function fetchAndPrintPaths() {
  try {
    const response = await fetch(`${urlcdn}/${requestedDomain}/datos/components.json?v=${version}`);
    const data = await response.json();

    if (Array.isArray(data?.components)) {
      const cdnOptions = {
        local: `${urlcdn}/${requestedDomain}`,
        central: cdnStorage,
      };

      const scripts = data.components
        .filter(component => component.status === true)
        .map(component => {
          const cdnURL = cdnOptions[component.path_cdn] || cdnOptions['central'];
          return `<script src="${cdnURL}/${component.path}?v=${version}"></script>`;
        })
        .join('\n');

      return scripts;
    } else {
      return '';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return '';
  }
}
async function get_store() {
  try {
      const response = await fetch(`${urlcdn}/${requestedDomain}/conf.json?v=${version}`);
      const data = await response.json();
      const field_info = data.information[0];

      const templateData = {
          id_client: field_info.id_client,
          title: field_info.title,
          description: field_info.description,
          imagen_default: field_info.imagen_default,
          status: field_info.status,
          plan: field_info.plan,
          theme: field_info.theme,
          path_cdn: field_info.path_cdn,
      };

      return templateData;
  } catch (error) {
      console.error('Error al obtener los datos del endpoint:', error.message);
      return null;
  }
}


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', async (req, res) => {
 
  const html = ReactDOMServer.renderToString(
    React.createElement('h1', null, '¡Hola desde el servidor! ' + requestedDomain)
  );
  const header = await ejs.renderFile(path.join(__dirname, '/views/header.ejs'));
  const footer = await ejs.renderFile(path.join(__dirname, '/views/footer.ejs'));
  const componentsRender = await fetchAndPrintPaths();
  const infoStore= await get_store();

  res.render('index.ejs', {
    header,
    footer,
    components: componentsRender,
    content: html,
    domain: requestedDomain,
    urldcdn: urlcdn,
    cdnstorage: cdnStorage,
    version,
    infoStore
  });

});




/*
app.get('/catalogo.js', (req, res) => {
  const filePath = path.join(__dirname, '/views/catalogo.js');
  res.sendFile(filePath);
  
});

app.get('/catalogo/', async (req, res) => {
  const requestedDomain = 'hoppedidos.com' //req.get('host');
  const productos = [
    { id: 1, nombre: 'Producto ABC 1', precio: 10 },
    { id: 2, nombre: 'Producto ABC 2', precio: 15 },
    { id: 3, nombre: 'Producto ABC 3', precio: 20 },
  ];

  const productList = await ejs.renderFile(path.join(__dirname, '/views/modulos/productos/productList.ejs'), { productos });
  const header = await ejs.renderFile(path.join(__dirname, '/views/header.ejs'));
  const footer = await ejs.renderFile(path.join(__dirname, '/views/footer.ejs'));

  res.render('catalogo.ejs', { header, footer, content: productList, title: requestedDomain });
});
*/

app.listen(3002, () => {
  console.log('Servidor de renderizado iniciado en http://localhost:3002');
});
