export function detailCompany(userId) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    return fetch("https://ag-companies-014d99127ab1.herokuapp.com/company/" + userId, requestOptions)
      .then(response => response.json())
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error; 
      });
  }