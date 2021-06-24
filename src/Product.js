import { AppBar, Button, Card, CardMedia, Container, Fade, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Pagination from '@material-ui/lab/Pagination';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CounterButtons from './CounterButtons';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { initProduct, addToCart } from './store/actions/index';
import React from 'react';
import { Redirect } from 'react-router';


const mapStateToProps = state => {
    return {
        product: state.product.ProductData,
        cart: state.products.Cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initProduct: (id) => dispatch(initProduct(id)),
        addToCart: (cart) => dispatch(addToCart(cart))
    }
}

function Product(props) {
    const [page, setPage] = useState(0);
    const handleChange = (event, value) => {
        setPage(value - 1);
    };

    const [gotoCart, setgotoCart] = useState(false);
    const gotoCartFn = () => {
        setgotoCart(true);
    }

    const [gotoHome, setgotoHome] = useState(false);
    const gotoHomeFn = () => {
        setgotoHome(true);
    }

    useEffect(()=>{
        props.initProduct(props.match.params.id);
    },[]);

    const useStyles = makeStyles({
        someRoot: {
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
        },
        gridList: {
            flexWrap: 'nowrap'
        },
        root: {
            flexGrow: 1,
        },
        cardRoot: {
            minWidth: 300,
            margin: 15
        },
        media: {
            height: 400,
            objectFit: 'contain',
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
        priceHeading: {
            marginLeft: 20
        },
        SortAndFilter: {
            margin: 10
        },
        ul: {
            placeContent: 'center'
        },
        description: {
            marginLeft: 30,
            marginRight: 30
        },
        price: {
            marginLeft: 10
        },
        containerRoot: {
            margin: 0,
            padding: 0
        }

    });
    const classes = useStyles();
    console.log('props.product');
    
    if (gotoCart)
        return (
            <Redirect push to={'/cart'}></Redirect>
        );

    if (gotoHome)
        return (
            <Redirect push to={'/dashboard'}></Redirect>
        );
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
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={gotoCartFn}>
                            <ShoppingCartSharpIcon />
                        </IconButton>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Typography variant="h4" color="textPrimary" className={classes.heading}>
                Lizard
            </Typography>
            <Grid container direction="row" justify="center" >
                <Fade in timeout={500}>
                    <Grid item >
                        <Card className={classes.cardRoot}>
                            <CardMedia
                                className={classes.media}
                                src={props.product.mediaURLS?props.product.mediaURLS[page]:null}
                                title={props.product.title}
                                component="img"
                            />
                        </Card>
                        <Pagination count={6} page={page + 1} onChange={handleChange} classes={{
                            ul: classes.ul,
                        }} />
                    </Grid>
                </Fade>
                <Fade in timeout={500}>
                    <Grid item >
                        <Typography variant="h6" color="textPrimary" className={classes.heading}>
                            Description
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.description}>
                            {props.product.description}
                        </Typography>
                        <Container classes={{ root: classes.containerRoot }} style={{ display: 'flex' }}>
                            <Container style={{ display: 'inline', paddingTop: 10 }}>
                                <Typography variant="h6" color="textPrimary" className={classes.priceHeading} display="inline">
                                    Price:
                                </Typography>
                                <Typography variant="body1" color="textSecondary" className={classes.price} display="inline">
                                    {props.product.price}
                                </Typography>
                            </Container>
                            <Container style={{ display: 'inline', textAlign: 'right' }}>
                                <CounterButtons 
                                onChange={(id, value) => { props.addToCart({ ...props.cart, [id]: value }); }} 
                                number={props && props.cart[props.match.params.id] ? props.cart[props.match.params.id] : 0} 
                                id={props.match.params.id} />
                            </Container>
                        </Container>
                    </Grid>
                </Fade>
            </Grid>
        </div >
    );
}

export default connect(mapStateToProps, mapDispatchToProps)((Product));