const urlcdn = 'https://tiendas.agencsi.com';
const cdnStorage = `${urlcdn}/storage`;
const requestedDomain = 'hoppedidos.com'; //req.get('host');


function generarCodigoAleatorioConTimestamp() {
    const codigoAleatorio = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const timestamp = Date.now();
    const codigoFinal = `${codigoAleatorio}${timestamp}`;
    return codigoFinal;
}

const version = generarCodigoAleatorioConTimestamp();

async function get_store() {
    try {
        const response = await fetch(`${urlcdn}/${requestedDomain}/conf.json?v=${version}`);
        const data = await response.json();
        const field_info = data.information[0];

        const templateData = {
            id_client: field_info.id_client,
            title: field_info.title,
            description: field_info.description,
            imagen_default: field_info.imagen_default,
            status: field_info.status,
            plan: field_info.plan,
            theme: field_info.theme,
            path_cdn: field_info.path_cdn,
        };

        return templateData;
    } catch (error) {
        console.error('Error al obtener los datos del endpoint:', error.message);
        return null;
    }
}
(async () => {
  let info_store =   get_store();
})();