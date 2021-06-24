import { AppBar, Button, Fade, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import CartItem from './CartItem';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { addToCart } from './store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import React, { useState } from 'react';

const mapStateToProps = state => {
    return {
        cart: state.products.Cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (cart) => dispatch(addToCart(cart))
    }
}

function Cart(props) {
    const [gotoHome, setgotoHome] = useState(false);
    const gotoHomeFn = () => {
        setgotoHome(true);
    }

    const useStyles = makeStyles({
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
    const classes = useStyles();

    if (gotoHome)
        return (
            <Redirect push to={'/dashboard'}></Redirect>
        );

    const dataKeys = Object.keys(props.cart);
    console.log(props.cart[dataKeys[0]]+"dk"+typeof(dataKeys[0]));
    const cartList = [];
    if (dataKeys.length > 0) {
        for (var i = 0; i < dataKeys.length; i++) {
            var cartItemId = parseInt(dataKeys[i]);
            console.log(cartItemId);
            var handleCartItemChange = (id, value) => {
                console.log(id + " " + value);
                props.addToCart({ ...props.cart, [id]: value });
            }
            cartList.push(
                <Fade in timeout={500}>
                    <Grid item >
                        <CartItem
                            imageURL="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            heading="Lizard"
                            description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica"
                            addToCart={handleCartItemChange}
                            id={cartItemId}
                            number={props.cart[cartItemId]}
                            key={cartItemId}
                            price={100}
                        />
                    </Grid>
                </Fade>
            );
        }
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Online Shopping
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={gotoHomeFn}>
                        <HomeSharpIcon />
                    </IconButton>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Typography variant="h4" color="textPrimary" className={classes.heading}>
                Your Cart
            </Typography>
            <Grid container direction="row" spacing={3} justify="center" >
                {cartList}
            </Grid>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Cart));