import {
  generateRoutes
} from '../../modulos/navigation/index.js';
import {
  menuOptions
} from '../../core/js/menuRestobar.js';
import {
  loginAuth,
  registerUser
} from '../../modulos/login/session.js';
import {
  registerStore
} from '../../modulos/company/register.js'
import {
  openLoader,
  closeLoader,
  checkCountStores,
  redirectLogin
} from './utils.js';

import { detailCompany } from "../../modulos/company/getCompany.js";

const typeCompany = sessionStorage.getItem('typeCompany') ?? null;

async function getSysRoutes() {
  try {
    const resultado = await menuOptions(typeCompany);
    return generateRoutes(resultado);
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
}

const $ = Dom7;
const theme = 'ios';
const app = new Framework7({
  el: '#app',
  routes: await getSysRoutes(),
  theme,
  view: {
    browserHistory: true,
  },
  utils: {
    closeLoader,
    openLoader,
    registerUser,
    registerStore,
    checkCountStores,
    detailCompany
  },
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

window.app = app;


app.on('pageAfterIn', async function (page) {

  const currentPagePath = page.route.route.path;
  const isLoginPage = currentPagePath === '/login' || currentPagePath === '/register';

  if (isLoginPage) {
    initializeLoginPage();
  } else {
    handleAuthenticatedPage();
  }

  function initializeLoginPage() {
    window.loginAuth = loginAuth;
    $('.panel.panel-left').hide();
    $('footer').hide();
    $('.view.view-main').removeAttr('style');
  }

  function handleAuthenticatedPage() {
    redirectLogin();
    const name = sessionStorage.getItem('name');
    $('#name').text(name);
    $('footer').show();
  }


});
