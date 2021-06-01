import { AppBar, Button, Fade, Grid, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';
import SortAndFilterUI from './SortAndFilter/SortAndFilterUI';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

const classes = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
    title: {
        flexGrow: 1,
    },
    heading: {
        margin: 20
    },
    SortAndFilter: {
        margin: 10
    }
});

class Dashboard extends Component {
    state = {
        SortAndFilterData: {
        },
        ProductData: [
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
        ],
        FilteredAndSortedProductData: [
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
        ],
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
    }

    handleChange = (data) => {
        console.log({
            data
        });
        console.log('dashboard handle change');
        var filteredAndSortedProductData = [...this.state.ProductData];
        var dataKeys = Object.keys(data);
        if (dataKeys.length > 1) {
            for (var i = 0; i < dataKeys.length; i++) {
                var key = dataKeys[i];
                if (key !== 'sort' && filteredAndSortedProductData.length !== 0) {
                    filteredAndSortedProductData = this.filterBy(filteredAndSortedProductData, key, data[key]);
                }
            }
        }
        if (data.sort.column && data.sort.order) {
            if (data.sort.order === 'asc') {
                filteredAndSortedProductData.sort((a, b) => {
                    if (a[data.sort.column] < b[data.sort.column]) {
                        return -1;
                    } else if (a[data.sort.column] > b[data.sort.column]) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            } else if (data.sort.order === 'desc') {
                filteredAndSortedProductData.sort((a, b) => {
                    if (a[data.sort.column] < b[data.sort.column]) {
                        return 1;
                    } else if (a[data.sort.column] > b[data.sort.column]) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }
        }
        this.setState({
            SortAndFilterData: data,
            FilteredAndSortedProductData: filteredAndSortedProductData
        });
    }

    filterBy = (data, key, value) => {
        if (this.state.FilterFields.filter(field => field.name === key)[0].type === 'numberRange' && value.to && value.from) {
            return data.filter(dataValue => {
                return dataValue[key] >= value.from && dataValue[key] <= value.to;
            });
        } else if (typeof value !== 'object' && value !== null) {
            return data.filter(dataValue => {
                return dataValue[key] === value;
            });
        }
        return data;
    }

    render() {
        const classes = this.props.classes;
        const productData = this.state.FilteredAndSortedProductData.map(productData => {
            var handleCartItemChange = (id, value) => {
                this.setState({
                    Cart: Object.assign(this.state.Cart, { [id]: value })
                });
            }
            return (
                <Fade in timeout={500}>
                    <Grid item style={{ margin: 10 }}>
                        <CardItem
                            {...productData}
                            onChange={handleCartItemChange}
                            number={(this.state.Cart[productData.id] ? this.state.Cart[productData.id] : 0)}
                        />
                    </Grid>
                </Fade>
            )
        });
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Online Shopping
                        </Typography>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { window.location = '/cart' }}>
                            <ShoppingCartSharpIcon />
                        </IconButton>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
                <Typography variant="h2" color="textPrimary" className={classes.heading}>
                    Our Products
                </Typography>
                <SortAndFilterUI
                    data={this.state.SortAndFilterData}
                    fields={this.state.FilterFields}
                    onChange={this.handleChange}
                    className={classes.SortAndFilter}
                />
                <Grid container direction="row" justify="center" >
                    {productData}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sortAndFilterData: state.products.SortAndFilterData,
        productData: state.products.ProductData,
        filteredAndSortedProductData: state.products.FilteredAndSortedProductData,
        filterFields: state.products.FilterFields,
        cart: state.products.Cart,
    }
}
export default connect(mapStateToProps)(withStyles(classes)(Dashboard));