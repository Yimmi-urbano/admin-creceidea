require('dotenv').config();
const BUCKET_NAME= process.env.BUCKET_NAME;
const URL_CDN= process.env.URL_CDN

async function fetchConfigStore(domain) {
  try {

    const apiUrl = `${URL_CDN}/${BUCKET_NAME}/${domain}/config/store-config.json?v=2`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from API');
  }
}

async function fetchMenuNav(domain) {
  try {

    const apiUrl = `${URL_CDN}/${BUCKET_NAME}/${domain}/config/navigation.json?v=2`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from API');
  }
}

async function fetchInventarioCategory(nameCat) {
  try {

    const apiUrl = `https://lc6xe5g1a4.execute-api.us-east-1.amazonaws.com/dev/items/rhno-ecmm-warh?wh=2&page=1`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from API');
  }
}

module.exports = {

  fetchConfigStore,
  fetchMenuNav,
  fetchInventarioCategory


};
