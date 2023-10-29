


export function fetchOptions(idEmpresa) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch("https://ag-option-389b72fa4868.herokuapp.com/options/" + idEmpresa, requestOptions)
        .then(async response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            const result = await response.json();
            return result;
        })
        .catch(error => {
            throw error;
        });
}



export function generateRoutes(menuData) {
    const menuSystem = [
        {
            "optionID": "dashboard",
            "title": "Dashboards",
            "estado": "Activo",
            "url": "/dashboard",
            "componentURL": "./public/core/pages/dashboard.html?v=1",
            "icono": "dashboard",
            "orden": 1,
            "submenu": [],
            "_id": "6528c01f01ef0e0e80d5e65e"
        },
        {
            "optionID": "inicio",
            "title": "Inicio",
            "estado": "Activo",
            "url": "/",
            "componentURL": "./public/core/pages/home.html?v=1",
            "icono": "home",
            "orden": 1,
            "submenu": [],
            "_id": "6528c01f01ef0e0e80d5e65f"
        },
        {
            "optionID": "configuration",
            "title": "Configuracion",
            "estado": "Activo",
            "url": "/configuracion",
            "componentURL": "./public/core/pages/configuracion.html?v=1",
            "icono": "settings",
            "orden": 1,
            "submenu": [],
            "_id": "6528c01f01ef0e0e80d5e660"
        },
        {
            "optionID": "login",
            "title": "Login",
            "estado": "Activo",
            "url": "/login",
            "componentURL": "./public/core/pages/page-login.html",
            "icono": "person",
            "orden": 1,
            "submenu": [],
            "_id": "6528c01f01ef0e0e80d5e661"
        }
    ];


    menuSystem.forEach(menuItem => {
        menuData.menu_panel.push(menuItem);
    });


    const routes = [];

    function createRoute(item) {
        const route = {
            name: item.title,
            path: item.url,
            componentUrl: item.componentURL
        };

        return route;
    }

    function traverseMenu(menuItems) {
        for (const menuItem of menuItems) {
            const route = createRoute(menuItem);
            routes.push(route);

            if (menuItem.submenu && menuItem.submenu.length > 0) {
                traverseMenu(menuItem.submenu);
            }
        }
    }

    for (const key in menuData) {
        if (Array.isArray(menuData[key])) {
            traverseMenu(menuData[key]);
        }
    }

    return routes;
}


export function generarMenu(menuData) {
    const menuSystem = [
        {
            "optionID": "inicio",
            "title": "Inicio",
            "estado": "Inactivo",
            "url": "/",
            "componentURL": "./public/core/pages/home.html?v=1",
            "icono": "home",
            "orden": 1,
            "submenu": [],
            "_id": "6528c01f01ef0e0e80d5e65f"
        },
        {
            "optionID": "dashboard",
            "title": "Dashboard",
            "estado": "Activo",
            "url": "/dashboard",
            "componentURL": "./public/core/pages/dashboard.html?v=1",
            "icono": "dashboard",
            "orden": 0,
            "submenu": [],
            "_id": "6528c01f01ef0e0e80d5e65e"
        },

        {
            "optionID": "configuration",
            "title": "Configuracion",
            "estado": "Activo",
            "url": "/configuracion",
            "componentURL": "./public/core/pages/configuracion.html?v=1",
            "icono": "settings",
            "orden": 3,
            "submenu": [],
            "_id": "6528c01f01ef0e0e80d5e660"
        },
        {
            "optionID": "login",
            "title": "Login",
            "estado": "Inactivo",
            "url": "/login",
            "componentURL": "./public/core/pages/login.html?v=1",
            "icono": "person",
            "orden": 4,
            "submenu": [],
            "_id": "6528c01f01ef0e0e80d5e661"
        }
    ];




    menuSystem.forEach(menuItem => {
        menuData.menu_panel.push(menuItem);
    });

    menuData.menu_panel.sort((a, b) => a.orden - b.orden);

    const menuContainer = document.querySelector('#menuOffice');
    menuContainer.innerHTML = '';
    menuData.menu_panel.forEach(option => {
        if (option.estado !== "Activo") {
            return;
        }
       
        const menuItem = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.classList.add('item-content', 'item-link');
        menuLink.innerHTML = `
        <div class="item-media">
          <span class="material-symbols-outlined">${option.icono}</span>
        </div>
        <div class="item-inner">
          <div class="item-title">${option.title}</div>
        </div>
      `;
        menuLink.href = option.url;

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
              <div class="item-title">${submenu.title}</div>
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



