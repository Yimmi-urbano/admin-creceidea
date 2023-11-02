
export function generateRoutes(menuData) {

console.log(menuData)
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





