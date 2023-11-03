export async function menuOptions(selectOption) {

    const restofood = {
        menu_panel: [
            {
                "optionID": "inicio",
                "title": "Inicio",
                "estado": "Inactivo",
                "url": "/",
                "componentURL": "./public/core/pages/home.html?v=1",
                "icono": "home",
                "orden": 1,
                "submenu": []
            },
            {
                "optionID": "dashboard",
                "title": "Dashboard",
                "estado": "Activo",
                "url": "/dashboard",
                "componentURL": "./public/core/pages/dashboard.html?v=1",
                "icono": "dashboard",
                "orden": 0,
                "submenu": []
            },
            {
                "optionID": "customs",
                "title": "Personalizar",
                "estado": "Activo",
                "url": "/customs",
                "componentURL": "./public/core/pages/customs.html?v=1",
                "icono": "draw",
                "orden": 0,
                "submenu": []
            },
            {
                "optionID": "configuration",
                "title": "Configuracion",
                "estado": "Activo",
                "url": "/configuracion",
                "componentURL": "./public/core/pages/configuracion.html?v=1",
                "icono": "settings",
                "orden": 3,
                "submenu": []
            },
            {
                "optionID": "login",
                "title": "Login",
                "estado": "Inactivo",
                "url": "/login",
                "componentURL": "./public/core/pages/page-login.html?v=1",
                "icono": "person",
                "orden": 4,
                "submenu": []
            }
        ]
    };
    const ecommerce = {
        menu_panel: [
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
                "optionID": "products",
                "title": "Products",
                "estado": "Activo",
                "url": "/products",
                "componentURL": "./public/core/pages/products.html?v=1",
                "icono": "inventory",
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
                "componentURL": "./public/core/pages/page-login.html?v=1",
                "icono": "person",
                "orden": 4,
                "submenu": [],
                "_id": "6528c01f01ef0e0e80d5e661"
            }
        ]
    };

    const defect = {
        menu_panel: [

            {
                "optionID": "register",
                "title": "Registro",
                "estado": "Inactivo",
                "url": "/register",
                "componentURL": "./public/core/pages/page-register.html?v=1",
                "icono": "person",
                "orden": 4,
                "submenu": []
            },
            {
                "optionID": "login",
                "title": "Login",
                "estado": "Inactivo",
                "url": "/login",
                "componentURL": "./public/core/pages/page-login.html?v=1",
                "icono": "inventory",
                "orden": 0,
                "submenu": []
            },
            {
                "optionID": "select-category",
                "title": "Seleccionar rubro",
                "estado": "Inactivo",
                "url": "/create/select-category",
                "componentURL": "./public/core/pages/select-category.html?v=1",
                "icono": "person",
                "orden": 4,
                "submenu": []
            },
            {
                "optionID": "create-name-company",
                "title": "Crea el nombre de tu negocio",
                "estado": "Inactivo",
                "url": "/create/restofood/name-company",
                "componentURL": "./public/core/pages/create-company/restofood/page-name-company.html?v=1",
                "icono": "person",
                "orden": 4,
                "submenu": []
            },
            {
                "optionID": "dashboard",
                "title": "Escritorio de mi tienda",
                "estado": "Inactivo",
                "url": "/dashboard",
                "componentURL": "./public/core/pages/dashboard.html?v=1",
                "icono": "person",
                "orden": 4,
                "submenu": []
            }
        ]
    };



    if (selectOption === 'restofood') {
        return restofood;
    } else if (selectOption === 'ecommerce') {
        return ecommerce;
    } else {
        return defect;
    }


}

