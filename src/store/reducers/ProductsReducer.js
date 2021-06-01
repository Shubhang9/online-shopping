import * as actionTypes from '../actionTypes';

const initialState ={
    SortAndFilterData: {},
    ProductData: [],
    FilteredAndSortedProductData: [],
    FilterFields: [{
        label: "Price",
        name: "price",
        text: {
            all: "having any name",
            singular: "having names containing",
            plural: "having names containing"
        },
        type: "numberRange"
    }],
    Cart: {
    }
};

const ProductsReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_PRODUCTS:
            return {
                ...state,
                ProductData: action.products,
                FilteredAndSortedProductData: action.products
            }
        default:
            return state;
    }
};

export default ProductsReducer;