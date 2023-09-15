const jsonNavigation = [
  {
    "menu_principal": [
      {
        "titulo": "Inicio",
        "url": "/",
        "url_page": "./public/core/pages/home.html?v=5",
        "destino": "_self",
        "icono": "fas fa-home",
        "orden": 1
      },
      {
        "titulo": "Productos",
        "url": "/productos/",
        "url_page": "https://storage.googleapis.com/stores-crece/ideasprint.com.pe/theme/default/pages/home.html?v=5",
        "destino": "_self",
        "icono": {
          "tipo": "fuente",
          "valor": "fas fa-box"
        },
        "orden": 2,
        "submenus": [
          {
            "titulo": "Nuevo Producto",
            "url": "/productos/nuevo/",
            "destino": "_self",
            "icono": {
              "tipo": "fuente",
              "valor": "fas fa-plus"
            },
            "orden": 1
          },
          {
            "titulo": "Administrar Productos",
            "url": "/productos/administrar/",
            "destino": "_self",
            "icono": {
              "tipo": "url",
              "valor": "https://example.com/custom-icon.png"
            },
            "orden": 2
          }
        ]
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

// Función para configurar los eventos pageAfterIn y pageInit para una URL específica
function configurarEventosParaURL(url) {
  switch (url) {
    case '/productos':
      return {
        on: {
          pageAfterIn: function (event, handler) {
            // Personaliza la lógica para pageAfterIn de '/productos/nuevo' aquí
          },
          pageInit: function (event, handler) {
            console.log('Página cargada al iniciar (productos nuevo)');
            // Personaliza la lógica para pageInit de '/productos/nuevo' aquí
          },
        },
      };
    case '/':
      return {
        on: {
          pageAfterIn: function (event, handler) {
            // Personaliza la lógica para pageAfterIn de '/otra-url' aquí
          },
          pageInit: function (event, handler) {
            console.log('Página cargada al iniciar (otra-url)');
            // Personaliza la lógica para pageInit de '/otra-url' aquí
          },
        },
      };
    default:
      return {
        on: {
          pageAfterIn: function (event, handler) {},
          pageInit: function (event, handler) {},
        },
      };
  }
}

const routes = [];

jsonNavigation.forEach(menu => {
  for (const key in menu) {
    const items = menu[key];
    items.forEach(item => {
      const route = {
        path: item.url,
        componentUrl: `${item.url_page}`,
      
          ...configurarEventosParaURL(item.url), // Configurar eventos según la URL
        
      };

      routes.push(route);

      if (item.submenus) {
        item.submenus.forEach(submenu => {
          const submenuRoute = {
            path: submenu.url,
            componentUrl: `pages${submenu.url}.html`,
        
              ...configurarEventosParaURL(submenu.url), // Configurar eventos para la URL del submenu
            
          };

          routes.push(submenuRoute);
        });
      }
    });
  }
});

// Imprimir las rutas generadas
console.log(routes);
