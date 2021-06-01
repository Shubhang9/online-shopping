const API_HOST= 'http://localhost:8000';

const GET_ALL_PRODUCTS_URL = '/products';

const prependHost = (url) => API_HOST + url;


export const getAllProducts = () => prependHost(GET_ALL_PRODUCTS_URL)