var jsonData = [
    {
        "menu_principal": [
            {
                "titulo": "Inicio",
                "url": "/",
                "url_page": "http://localhost:3002/stores-crece/ideasprint.com.pe/theme/default/pages/home.html?v=5",
                "destino": "_self",
                "estado": false,
                "icono": "fas fa-home",
                "orden": 2
            },
         
            {
                "titulo": "Sobre </br> Nosotros",
                "url": "/sobre-nosotros/",
                "url_page": "http://localhost:3002/stores-crece/ideasprint.com.pe/theme/default/pages/acerca-de-nosotros.html?v=6",
                "destino": "_self",
                "estado": true,
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 3
            },
            {
                "titulo": "Copias e Impresiones",
                "url": "/categoria/copias-e-impresiones",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 4
            },
            {
                "titulo": "Imprenta",
                "url": "/categoria/imprenta",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 4
            },
            {
                "titulo": "Gigantografias",
                "url": "/gigantografias",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 4
            },
            {
                "titulo": "Publicidad </br> Textil",
                "url": "/publicidad-textil",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 4
            },
            {
                "titulo": "Merchandising",
                "url": "/merchandising",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 4
            },
            {
                "titulo": "Acrilicos",
                "url": "/acrilicos",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 4
            },
            {
                "titulo": "Regalos Corporativos",
                "url": "/regalos-corporativos",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 4
            },
            {
                "titulo": "Servicios </br> Especiales",
                "url": "/servicios-especiales",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
                },
                "orden": 4
            },
            {
                "titulo": "Contactanos </br> Aqui",
                "url": "/contacto",
                "estado": true,
                "destino": "_self",
                "icono": {
                    "tipo": "url",
                    "valor": "https://placehold.co/50x50"
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

function createMenuItem(item) {
    let iconHTML = '';
    if (item.icono) {
      if (item.icono.tipo === 'fuente') {
        iconHTML = `<i class="${item.icono.valor}"></i>`;
      } else if (item.icono.tipo === 'url') {
        iconHTML = `<img src="${item.icono.valor}" alt="${item.titulo}">`;
      }
    }
    const menuItemTemplate = `
      <li class="menu-item">
        <a class="menu-link" href="${item.url}" target="${item.destino}">
          ${iconHTML} ${item.titulo}
        </a>
        ${item.submenus ? createSubMenu(item.submenus) : ''}
      </li>
    `;
    return menuItemTemplate;
  }
  
  
  function createSubMenu(submenuItems) {
    if (!submenuItems || submenuItems.length === 0) {
      return ''; 
    }
  
    const submenuList = `
      <ul class="submenu">
        ${submenuItems.map((item) => `
          <li class="submenu-item">
            <a class="submenu-link" href="${item.url}" target="${item.destino}">${item.titulo}</a>
            ${createSubMenu(item.submenus)}
          </li>
        `).join('')}
      </ul>
    `;
    return submenuList;
  }
  
  function generateMenu(menuKey, containerId) {

    const menuData = jsonData.find((menu) => menu[menuKey]);
  
    if (menuData) {
      const menuItems = menuData[menuKey];
      const menuContainer = document.getElementById(containerId);
      menuContainer.innerHTML = '';
      menuItems.sort((a, b) => a.orden - b.orden);

      menuItems.forEach((item) => {
        if (item.estado) {
          const menuItem = createMenuItem(item);
          menuContainer.innerHTML += menuItem;
        }
      });
    }
  }
  
  
  var menuKeysList = document.querySelectorAll('.store-menu');
  menuKeysList.forEach((menu) => {
    const dataMenu = menu.getAttribute('data-menu');
    generateMenu(dataMenu, menu.id);
  });