import * as actionTypes from '../actionTypes';
import * as URLS from '../URLS';

const setProductData = (productData) => {
    return {
        type: actionTypes.INIT_PRODUCT_DATA,
        productData: productData
    }
}

//export const initProduct = (id) => {
//     return (dispatch) => {
//         fetch(URLS.getAllProductData(id))
//             .then(response => response.json())
//             .then(result => {
//                 dispatch(setProductData(result.ProductData));
//             });
//     }
// }

export const initProduct = (id) => {
    return {
        type: actionTypes.INIT_PRODUCT_DATA,
        productData: {
            id: 1,
            price: 2000,
            imageURL: "/static/images/cards/contemplative-reptile.jpg",
            title: "Contemplative Reptile",
            heading: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            mediaURLS: [
                "http://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg",
                "/static/images/cards/contemplative-reptile.jpg",
                "/static/images/cards/contemplative-reptile.jpg",
                "/static/images/cards/contemplative-reptile.jpg",
                "/static/images/cards/contemplative-reptile.jpg",
                "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
            ]
        }
    }
}