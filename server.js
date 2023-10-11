const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
 
  const headerParams = { username: 'Usuario123' };
  const footerParams = { currentYear: new Date().getFullYear() };

  res.render('index', { title: 'CreceIdea', headerParams, footerParams });
  
});


app.use('/public', express.static(path.join(__dirname, 'public')));
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


