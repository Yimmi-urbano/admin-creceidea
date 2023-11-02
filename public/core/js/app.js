import { generateRoutes, generarMenu } from '../../modulos/navigation/index.js';
import { menuOptions } from '../../core/js/menuRestobar.js';
import { loginAuth, checkLogin, registerUser } from '../../modulos/login/session.js';
import { registerStore } from '../../modulos/register-store/register.js'
import { openLoader, closeLoader } from './util.js'

let typeCompany = sessionStorage.getItem('typeCompany');

const sysRoutes = await menuOptions(typeCompany).then(resultado => {

  return generateRoutes(resultado)
}).catch(error => {
  console.log("Error:", error);
});

async function redirectLogin() {
  const isLoggedIn = await checkLogin();
  try {

    if (!isLoggedIn) {

      setTimeout(function () {
        app.view.main.router.navigate('/login/');
      }, 100);

      return;
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
  } catch (error) {

    console.error('Error checking login:', error);
  }

}



function menuPanel() {

  menuOptions(storeId)
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
  routes: sysRoutes,
  theme,
  view: {
    browserHistory: true,
  },
  utils: { closeLoader, openLoader, registerUser,registerStore },

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

  if (page.route.route.path === '/login' || page.route.route.path === '/register') {
    window.loginAuth = loginAuth;
    $('.panel.panel-left').hide()
    $('footer').hide()
    $('.view.view-main').removeAttr('style')
  } else {
    redirectLogin()
    const name = sessionStorage.getItem('name');
    $('#name').text(name)
    $('footer').show()
  }
});







