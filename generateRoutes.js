const generateRoutes = (infoNavigation) => {

  const routes = [{
    path: '/producto/:id',
    name: 'producto',
    componentUrl: 'http://localhost:3002/stores-crece/ideasprint.com.pe/theme/default/pages/acerca-de-nosotros.html?v=6', // Reemplaza con la URL de tu componente por defecto
    props: true
  },

  {
    path: '/categoria/:id',
    name: 'categoria',
    componentUrl: 'http://localhost:3002/stores-crece/ideasprint.com.pe/theme/default/pages/category.html?v=6', // Reemplaza con la URL de tu componente por defecto
    props: true
  },
  {
    path: '/resumen/:id',
    name: 'categoria',
    componentUrl: 'http://localhost:3002/stores-crece/ideasprint.com.pe/theme/default/pages/acerca-de-nosotros.html?v=6', // Reemplaza con la URL de tu componente por defecto
    props: true
  }
  ];

  infoNavigation.forEach(menu => {
    for (const key in menu) {
      const items = menu[key];
      items.forEach(item => {
        const route = {
          path: `${item.url}`,
          name: item.titulo,
          componentUrl: `${item.url_page || ""}`
        };

        if (route.componentUrl) {
          routes.push(route);
        }

        if (item.submenus) {
          item.submenus.forEach(submenu => {
            const submenuRoute = {
              path: `${submenu.url}`,
              componentUrl: `${submenu.url_page || ""}`
            };

            if (submenuRoute.componentUrl) {
              routes.push(submenuRoute);
            }
          });
        }
      });
    }
  });


  return routes;
}

module.exports = generateRoutes;
