import * as actionTypes from '../actionTypes';

const initialState = {
    SortAndFilterData: {},
    ProductData: [],
    ProductMap: {},
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

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_PRODUCTS:
            return {
                ...state,
                ProductData: action.products,
                ProductMap: action.productMap,
                FilteredAndSortedProductData: action.products
            }
        case actionTypes.SORT_FILTER_ADDED:
            return {
                ...state,
                SortAndFilterData: action.sortAndFilterData,
                FilteredAndSortedProductData: action.filteredAndSortedProductData
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                Cart: action.cart
            }
        default:
            return state;
    }
};

export default ProductsReducer;