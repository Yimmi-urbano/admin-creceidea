
const routes = [];

const jsonNavigation = [
  {
    "menu_principal": [
      {
        "titulo": "Inicio",
        "url": "/dashboard",
        "url_page": "./public/core/pages/dashboard.html?v=1",
        "destino": "_self",
        "icono": "fas fa-home",
        "orden": 1
      },
      {
        "titulo": "Inicio",
        "url": "/servicios/dominios",
        "url_page": "./public/core/pages/home.html?v=1",
        "destino": "_self",
        "icono": "fas fa-home",
        "orden": 1
      },
      {
        "titulo": "Inicio",
        "url": "/servicios/hosting",
        "url_page": "./public/core/pages/home.html?v=1",
        "destino": "_self",
        "icono": "fas fa-home",
        "orden": 1
      },
      {
        "titulo": "login",
        "url": "/",
        "destino": "_self",
        "url_page": "./public/core/pages/page-login.html?v=5",
        "icono": {
          "tipo": "url",
          "valor": "https://example.com/contact-icon.png"
        },
        "orden": 4
      }
    ]
  },
  {
    "menu_footer": [
      {
        "titulo": "Inicio",
        "url": "/inicio",
        "destino": "_self",
        "icono": "fas fa-home",
        "orden": 1
      },
      {
        "titulo": "Blog",
        "url": "/blog",
        "destino": "_self",
        "icono": {
          "tipo": "fuente",
          "valor": "fas fa-newspaper"
        },
        "orden": 3
      },
      {
        "titulo": "Contacto",
        "url": "/contacto",
        "destino": "_self",
        "icono": {
          "tipo": "url",
          "valor": "https://example.com/contact-icon.png"
        },
        "orden": 4
      }
    ]
  }
];

function configurarEventosParaURL(url) {
  switch (url) {
    case '/productos':
      return {
        on: {
          pageAfterIn: function (event, handler) {
          },
          pageInit: function (event, handler) {
            console.log('Página cargada al iniciar (productos nuevo)');
          },
        },
      };
    case '/login':
      return {
        on: {
          pageAfterIn:  function (event, handler) {
          },
          pageInit:  function (event, handler) {
          },
        },
      };
    default:
      return {
        on: {
          pageAfterIn: function (event, handler) { },
          pageInit: function (event, handler) { },
        },
      };
  }
}



jsonNavigation.forEach(menu => {
  for (const key in menu) {
    const items = menu[key];
    items.forEach(item => {
      const route = {
        path: item.url,
        name:item.titulo,
        componentUrl: `${item.url_page}`,

        ...configurarEventosParaURL(item.url),

      };

      routes.push(route);

      if (item.submenus) {
        item.submenus.forEach(submenu => {
          const submenuRoute = {
            path: submenu.url,
            name:item.titulo,
            componentUrl: `pages${submenu.url}.html`,

            ...configurarEventosParaURL(submenu.url),

          };

          routes.push(submenuRoute);
        });
      }
    });
  }
});

