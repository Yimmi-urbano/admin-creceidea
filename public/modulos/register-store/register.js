async function realizarSolicitudFetch(url, datos, metodo = 'POST') {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: metodo,
      headers: myHeaders,
      body: JSON.stringify(datos),
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('Error en la solicitud fetch:', error);
      throw error;
    }
  }
  
export async function registerStepOne(name,email,phone,password,doc_dni,role_id) {
  
    var datos = {
        "userId": "L520231101994",
        "nameCompany": "Polleria El Galpon",
        "domain": "elgalpon.com",
        "typeCompany": "restofood",
        "typeService": "free",
        "country": "PE",
        "emailPrimary": "elgalpon@gmail.com",
        "configContact": {
            "name": "Yimmi Elmer",
            "email": "contacto@gmail.com",
            "phoneCell": "999888777",
            "addressComercial": "Avenida Juan de Aliaga 3343",
            "socialNet": {
                "facebook": "https://facebook.com",
                "instagram": "https://instagram.com",
                "youtube": "https://youtube.com",
                "twitter": "https://twitter.com",
                "tiktok": "https://tiktok.com"
            }
        },
        "currency": {
            "symbol": "S/",
            "currency": "PEN"
        },
        "appearance": {
            "logo": "https://google.com/logo.png",
            "banner": "https://google.com/banners.png",
            "theme": "default",
            "colors": {
                "primary": "ff00cc",
                "secondary": "000000",
                "third": "ffffff"
            }
        }
    };
  
    try {
      const resultado = await realizarSolicitudFetch("https://ag-auth-78e557894804.herokuapp.com/auth/register", datos);
      return resultado;
    } catch (error) {
      console.log('Error en la solicitud:', error);
    }
  
  }