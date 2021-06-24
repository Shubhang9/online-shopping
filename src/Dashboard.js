import { AppBar, Button, Fade, Grid, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initProducts, addToCart, sortAndFilterAdded } from './store/actions/index';
import CardItem from './CardItem';
import SortAndFilterUI from './SortAndFilter/SortAndFilterUI';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { Redirect } from 'react-router';

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
        id:-1,
        gotoCart: false
    }
    componentDidMount = () => {
        this.props.initProducts();
    }
    handleChange = (data) => {
        console.log('dashboard handle change');
        var filteredAndSortedProductData = [...this.props.productData];
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
        this.props.sortAndFilterAdded(data, filteredAndSortedProductData);
    }

    filterBy = (data, key, value) => {
        if (this.props.filterFields.filter(field => field.name === key)[0].type === 'numberRange' && value.to && value.from) {
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

    setId = (id) => {
        this.setState({
            id:id
        });
    }

    gotoCart = () => {
        this.setState({
            gotoCart: true
        });
    }
    render() {
        console.log(this.props.filteredAndSortedProductData);
        console.log(this.props.productData);
        const classes = this.props.classes;
        const productData = this.props.filteredAndSortedProductData.map(productData => {
            var handleCartItemChange = (id, value) => {
                this.props.addToCart({ ...this.props.cart, [id]: value });
            }
            return (
                <Fade in timeout={500}>
                    <Grid item style={{ margin: 10 }}>
                        <CardItem
                            {...productData}
                            setId={this.setId}
                            onChange={handleCartItemChange}
                            number={(this.props.cart[productData.id] ? this.props.cart[productData.id] : 0)}
                        />
                    </Grid>
                </Fade>
            )
        });
        if (this.state.id !== -1)
            return (
                <Redirect push to={'/product/'+this.state.id}></Redirect>
            );
        if (this.state.gotoCart)
            return (
                <Redirect push to={'/cart'}></Redirect>
            );
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Online Shopping
                        </Typography>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={this.gotoCart}>
                            <ShoppingCartSharpIcon />
                        </IconButton>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
                <Typography variant="h2" color="textPrimary" className={classes.heading}>
                    Our Products
                </Typography>
                <SortAndFilterUI
                    data={this.props.sortAndFilterData}
                    fields={this.props.filterFields}
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

const mapDispatchToProps = dispatch => {
    return {
        initProducts: () => dispatch(initProducts()),
        sortAndFilterAdded: (sortAndFilterData, filteredAndSortedProductData) => dispatch(sortAndFilterAdded(sortAndFilterData, filteredAndSortedProductData)),
        addToCart: (cart) => dispatch(addToCart(cart)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Dashboard));