import { loginAuth,checkLogin,getInfoCompany } from '../../modulos/login/session.js';
import { fetchOptions, generateRoutes, generarMenu } from '../../modulos/navigation/index.js';

const idEmpresa = 44494994;

const sysRoutes = await fetchOptions(idEmpresa)
  .then(resultado => {
    return generateRoutes(resultado)
  })
  .catch(error => {
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

var $ = Dom7;
var theme = 'ios';
var app = new Framework7({
  el: '#app',
  theme,
  view: {
    browserHistory: true,
  },
  store: store,
  routes: sysRoutes,
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


app.on('pageAfterIn', function (page) {

  checkLogin()
  getInfoCompany()

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
  }
});







