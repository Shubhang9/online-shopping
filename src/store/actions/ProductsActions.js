import * as actionTypes from '../actionTypes';
import * as URLS from '../URLS';

const setProducts = (products) => {
    return {
        type: actionTypes.INIT_PRODUCTS,
        products: products
    }
}

export const initProducts = (products) => {
    return (dispatch) => {
        fetch(URLS.getAllProducts())
            .then(response => response.json())
            .then(result => {
                dispatch(setProducts(result.Products));
            });
    }
}