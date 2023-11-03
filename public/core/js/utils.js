import { checkLogin } from "../../modulos/login/session.js";
import { generarMenu } from '../../modulos/navigation/index.js';
import { menuOptions } from '../../core/js/menuRestobar.js';

async function openLoader() {
    const loaderDialog = app.dialog.create({
        content: `
        <div class="dialog-content">
    <svg class="iconloader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        id="euN7XOFoa1B1" viewBox="0 0 265 300" shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision">
        <style>
            <![CDATA[
            .iconloader {
                width: 55px
            }
    
            #euN7XOFoa1B3 {
                animation: euN7XOFoa1B3_c_o 1000ms linear infinite normal forwards
            }
    
            @keyframes euN7XOFoa1B3_c_o {
                0% {
                    opacity: 0
                }
    
                26.315789% {
                    opacity: 1
                }
    
                100% {
                    opacity: 1
                }
            }
    
            #euN7XOFoa1B4 {
                animation: euN7XOFoa1B4_c_o 1000ms linear infinite normal forwards
            }
    
            @keyframes euN7XOFoa1B4_c_o {
                0% {
                    opacity: 0
                }
    
                26.315789% {
                    opacity: 0
                }
    
                52.631579% {
                    opacity: 1
                }
    
                100% {
                    opacity: 1
                }
            }
    
            #euN7XOFoa1B5 {
                animation: euN7XOFoa1B5_c_o 1000ms linear infinite normal forwards
            }
    
            @keyframes euN7XOFoa1B5_c_o {
                0% {
                    opacity: 0
                }
    
                52.631579% {
                    opacity: 0
                }
    
                78.947368% {
                    opacity: 1
                }
    
                100% {
                    opacity: 1
                }
            }
            ]]>
        </style>
        <defs>
            <linearGradient id="euN7XOFoa1B5-fill" x1="0.051639" y1="0.127369" x2="0.977096" y2="0.925965"
                spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
                <stop id="euN7XOFoa1B5-fill-0" offset="0%" stop-color="#fd7104" />
                <stop id="euN7XOFoa1B5-fill-1" offset="100%" stop-color="#fac202" />
            </linearGradient>
        </defs>
        <g transform="matrix(5.3438 0 0 5.343784-516.454302-344.986279)">
            <path id="euN7XOFoa1B3"
                d="M107.016585,68.455297l10.113155,6.581859v23.94604q-10.113155-29.097283-10.113155-30.527899Z"
                transform="matrix(1.472237-.026934 0.019675 1.075443-61.416955-5.398652)" opacity="0" fill="#ffe700"
                stroke="#3f5787" stroke-width="0" />
            <path id="euN7XOFoa1B4"
                d="M108.87615,77.848333l6.596305-2.50109l7.300188,34.840158Q108.87615,79.278949,108.87615,77.848333Z"
                transform="matrix(1.125028 0.950009-.693965 0.821813 49.496995-91.686526)" opacity="0" fill="#ffb407"
                stroke="#3f5787" stroke-width="0" />
            <path id="euN7XOFoa1B5"
                d="M105.927945,81.598212l7.870067-9.39774l9.671739,42.033645c-11.815674-21.256674-18.442092-35.049942-17.541806-32.635905Z"
                transform="matrix(.61996 1.33561-.97564 0.45287 145.567466-96.450158)" opacity="0"
                fill="url(#euN7XOFoa1B5-fill)" stroke="#3f5787" stroke-width="0" stroke-linecap="square" />
        </g>
    </svg>
    </div>
            `,
        on: {
            close: function () { }
        },
        cssClass: "custom-loader"
    });


    loaderDialog.open()


}

async function closeLoader() {

    app.dialog.close()
}

async function checkCountStores(userId) {
    let cantidadDeRegistros = 0;
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch("https://ag-companies-014d99127ab1.herokuapp.com/company/" + userId, requestOptions);

        if (response.ok) {
            const result = await response.json();

            if (Array.isArray(result)) {
                cantidadDeRegistros = result.length;
            }
        } else {
            throw new Error("Error en la solicitud");
        }

        return cantidadDeRegistros;
        
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

async function redirectLogin() {
    try {
        const isLoggedIn = await checkLogin();

        if (!isLoggedIn) {
            setTimeout(() => {
                app.view.main.router.navigate('/login/');
            }, 100);
            return;
        } else {
            const panelLeft = document.querySelector('.panel.panel-left');
            if (panelLeft) {
              panelLeft.style.display = 'block';
            }
            
            app.panel.create({
                el: '.panel-left',
                on: {
                    opened: menuPanel
                },
                visibleBreakpoint: 1024
            });

        }
    } catch (error) {
        console.error('Error checking login:', error);
    }
}

async function menuPanel() {
    const typeCompany = sessionStorage.getItem('typeCompany') ?? null;

    try {
        const resultado = await menuOptions(typeCompany);
        generarMenu(resultado);
    } catch (error) {
        console.log("Error:", error);
    }
}

export { openLoader, closeLoader, checkCountStores, redirectLogin }