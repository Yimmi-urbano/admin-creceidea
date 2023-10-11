import { loginAuth } from '../../modulos/login/session.js';

var $ = Dom7;
var theme = 'ios';
var app = new Framework7({
  el: '#app',
  theme,
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





function generarMenu(menuData) {

  const menuContainer = document.querySelector('#menuOffice');

  $(menuContainer).html('')
  

  menuData.forEach(option => {
    const menuItem = document.createElement('li');

    const menuLink = document.createElement('a');
    menuLink.classList.add('item-content', 'item-link');
    menuLink.innerHTML = `
      <div class="item-media">
        <span class="material-symbols-outlined">${option.icono}</span>
      </div>
      <div class="item-inner">
        <div class="item-title">${option.titulo}</div>
      </div>
    `;
    menuLink.href = option.url_page;

    menuItem.appendChild(menuLink);

    if (option.submenus && option.submenus.length > 0) {

      menuItem.classList.add('accordion-item');

      const submenuContent = document.createElement('div');
      submenuContent.classList.add('accordion-item-content');
      const submenuList = document.createElement('ul');
      submenuList.classList.add('submenu');

      option.submenus.forEach(submenu => {
        const submenuItem = document.createElement('li');
        const submenuLink = document.createElement('a');
        submenuLink.classList.add('item-content', 'item-link');
        submenuLink.innerHTML = `
          <div class="item-media">
            <i class="icon icon-f7"></i>
          </div>
          <div class="item-inner">
            <div class="item-title">${submenu.titulo}</div>
          </div>
        `;
        submenuLink.href = submenu.url;
        submenuItem.appendChild(submenuLink);
        submenuList.appendChild(submenuItem);
      });

      submenuContent.appendChild(submenuList);

      menuItem.appendChild(submenuContent);
    }

    menuContainer.appendChild(menuItem);
  });

 
}


const menu_customer = [
  {
    "titulo": "Escritorio",
    "url_page": "/dashboard",
    "icono": "dashboard"
  }, 
  {
    "titulo": "Servicios",
    "url_page": "https://...",
    "icono": "domain",
    "submenus": [
      {
        "titulo": "Hosting",
        "url": "/servicios/hosting"
      },
      {
        "titulo": "Dominios",
        "url": "/servicios/dominios"
      },
    ]
  },
  {
    "titulo": "Pagos",
    "url_page": "https://...",
    "icono": "credit_card"
  },
  {
    "titulo": "Configuración",
    "url_page": "https://...",
    "icono": "settings"
 
  },

];

const menu_customer_resto = [
  {
    "titulo": "Escritorio",
    "url_page": "/dashboard",
    "icono": "dashboard"
  }, 
  {
    "titulo": "Diseña tu carta",
    "url_page": "https://...",
    "icono": "restaurant_menu",
    "submenus": [
      {
        "titulo": "Menu",
        "url": "/servicios/hosting"
      },
      {
        "titulo": "Colores",
        "url": "/servicios/dominios"
      },
      {
        "titulo": "Logo y banner",
        "url": "/servicios/dominios"
      },

    ]
  },
  {
    "titulo": "Pagos y facturas",
    "url_page": "https://...",
    "icono": "credit_card"
  },
  {
    "titulo": "Configuración",
    "url_page": "https://...",
    "icono": "settings"
 
  },

];

app.on('pageAfterIn', function (page) {

  let isTypeUser = sessionStorage.getItem('type_user');

console.log(isTypeUser)

if (isTypeUser==="customer_resto") {
  generarMenu(menu_customer_resto);
}

if (isTypeUser==="customer") {
  generarMenu(menu_customer);
}




  if (page.route.route.path === '/') {
    window.loginAuth = loginAuth;
     $('.panel.panel-left').hide()
     $('.view.view-main').removeAttr('style')
  }else{
    $('.panel.panel-left').show()
    app.panel.create({
      el: '.panel-left',
      on: {
        opened: function () {
          
        }
      },
      visibleBreakpoint: 1024
    })
  }
});








