import * as actionTypes from '../actionTypes';

const initialState = {
    ProductData: {}
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_PRODUCT_DATA:
            return {
                ...state,
                ProductData: action.productData
            }
        default:
            return state;
    }
}

export default ProductReducer;