
// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
if (document.location.search.indexOf('mode=') >= 0) {
  const mode = document.location.search.split('mode=')[1].split('&')[0];
  if (mode === 'dark') document.documentElement.classList.add('dark');
}


var componentesJSON = {
  "components": [
    {
      "_id": "COMPT0001",
      "titulo": "Google Maps",
      "url_menu": "/com-google-maps",
      "titulo_menu": "Google Maps",
      "status": true,
      "plan": "free",
      "path": "stores-crece/ideasprint.com.pe/bricks/slider/index.js",
      "path_cdn": "local"
    },
    {
      "_id": "COMPT0005",
      "titulo": "Whatsapp",
      "url_menu": "/com-whatsapp",
      "titulo_menu": "Whatsapp",
      "status": false,
      "plan": "free",
      "path": "components/compra_rapida/index.js",
      "path_cdn": "central"
    },
    ,
    {
      "_id": "COMPT0006",
      "titulo": "Menu",
      "url_menu": "/com-menu",
      "titulo_menu": "Whatsapp",
      "status": true,
      "plan": "free",
      "path": "stores-crece/ideasprint.com.pe/bricks/navigation/index.js",
      "path_cdn": "central"
    }
  ]
};

// Función para cargar componentes
function cargarComponentes() {
  componentesJSON.components.forEach(function (componente) {
    if (componente.status === true) {
      var scriptElement = document.createElement('script');
      scriptElement.src = componente.path;
      document.body.appendChild(scriptElement);
    }
  });
}

$(document).on('page:init', function (e) {
  cargarComponentes();
  console.log(e.detail.route)
  if (e.detail.route.name === 'categoria') {

  }
});


var app = new Framework7({
  el: '#app',
  theme,
  pushState: true,
  view: {
    browserHistory: true,
  },
  
  store: store,
  
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});


console.log(routes)