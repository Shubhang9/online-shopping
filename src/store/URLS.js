const API_HOST= 'http://localhost:8000';

const GET_ALL_PRODUCTS_URL = '/products';

const GET_ALL_PRODUCT_DATA_URL = '/GET_ALL_PRODUCT_DATA_URL';

const prependHost = (url) => API_HOST + url;


export const getAllProducts = () => prependHost(GET_ALL_PRODUCTS_URL)

export const getAllProductData = (id) => prependHost(GET_ALL_PRODUCT_DATA_URL)+'/'+id