

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



export async function loginAuth(username, password) {

  var datos = {
    "email": username,
    "password": password
  };

  try {
    const resultado = await realizarSolicitudFetch("https://ag-auth-78e557894804.herokuapp.com/auth/login", datos);
    return resultado;
  } catch (error) {
    console.log('Error en la solicitud:', error);
  }

}

export async function checkLogin(app) {
  const type_user = sessionStorage.getItem('type_user');
  
  return type_user !== null;
}



export async function getInfoCompany(email_primary){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:3234/api/company/yurbanoantunezqa@gmail.com", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

