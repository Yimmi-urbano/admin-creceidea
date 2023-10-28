import { fetchOptions, generateRoutes, generarMenu } from '../../modulos/navigation/index.js';
import { loginAuth, checkLogin, getInfoCompany } from '../../modulos/login/session.js';
import { openLoader, closeLoader } from './util.js'

const idEmpresa = 44494994;

const sysRoutes = await fetchOptions(idEmpresa).then(resultado => {
    return generateRoutes(resultado)
  }).catch(error => {
    console.log("Error:", error);
  });

function menuPanel() {

  fetchOptions(idEmpresa)
    .then(resultado => {
      generarMenu(resultado)
    })
    .catch(error => {
      console.log("Error:", error);
    });

}

async function redirectLogin() {
  const isLoggedIn = await checkLogin();
  try {

    if (!isLoggedIn) {

      setTimeout(function () {
        app.view.main.router.navigate('/login/');
      }, 100);

      return;
    }
  } catch (error) {

    console.error('Error checking login:', error);
  }

}

var $ = Dom7;
var theme = 'ios';
var app = new Framework7({
  el: '#app',
  routes: sysRoutes,
  theme,
  view: {
    browserHistory: true,
  },
  utils: { closeLoader, openLoader },
 
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

  if (page.route.route.path === '/login') {
    window.loginAuth = loginAuth;
    $('.panel.panel-left').hide()
    $('.view.view-main').removeAttr('style')
  } else {
    $('.panel.panel-left').show()
    app.panel.create({
      el: '.panel-left',
      on: {
        opened: function () {
          menuPanel()
        }
      },
      visibleBreakpoint: 1024
    })

    redirectLogin()
    getInfoCompany()

  }
});







