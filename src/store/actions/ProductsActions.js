import * as actionTypes from '../actionTypes';
import * as URLS from '../URLS';

const setProducts = (products) => {
    const productMap={};
    products.forEach((item, index)=>{
        productMap[item.id] = index;
    });
    return {
        type: actionTypes.INIT_PRODUCTS,
        products: products,
        productMap: productMap
    }
}

// export const initProducts = () => {
//     return (dispatch) => {
//         fetch(URLS.getAllProducts())
//             .then(response => response.json())
//             .then(result => {
//                 dispatch(setProducts(result.Products));
//             });
//     }
// }

export const initProducts = () => {
    const products = [
        {
            id: 1,
            price: 2000,
            imageURL: "/static/images/cards/contemplative-reptile.jpg",
            title: "Contemplative Reptile",
            heading: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id: 2,
            price: 20200,
            imageURL: "/static/images/cards/contemplative-reptile.jpg",
            title: "Contemplative Reptile",
            heading: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id: 3,
            price: 12000,
            imageURL: "http://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg",
            title: "Contemplative Reptile",
            heading: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id: 4,
            price: 3000,
            imageURL: "/static/images/cards/contemplative-reptile.jpg",
            title: "Contemplative Reptile",
            heading: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id: 5,
            price: 9000,
            imageURL: "/static/images/cards/contemplative-reptile.jpg",
            title: "Contemplative Reptile",
            heading: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        }
    ];
    const productMap={};
    products.forEach((item, index)=>{
        productMap[item.id] = index;
    });
    return {
        type: actionTypes.INIT_PRODUCTS,
        products: products,
        productMap: productMap
    }
}

export const sortAndFilterAdded = (sortAndFilterData, filteredAndSortedProductData) => {
    return {
        type: actionTypes.SORT_FILTER_ADDED,
        sortAndFilterData: sortAndFilterData,
        filteredAndSortedProductData: filteredAndSortedProductData
    }
}

export const addToCart = (cart) => {
    return {
        type: actionTypes.ADD_TO_CART,
        cart: cart
    }
}