import { AppBar, Button, Card, CardMedia, Container, Fade, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Pagination from '@material-ui/lab/Pagination';
import { useState } from 'react';
import CounterButtons from './CounterButtons';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

export default function Product() {
    const [page, setPage] = useState(0);
    const handleChange = (event, value) => {
        setPage(value - 1);
    };
    const [counter, setCounter] = useState(0);
    const onChange = (event, value) => {
        setCounter(value);
    };
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
        containerRoot:{
            margin: 0,
            padding: 0
        }

    });
    const classes = useStyles();
    const mediaURLs = [
        "http://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg",
        "/static/images/cards/contemplative-reptile.jpg",
        "/static/images/cards/contemplative-reptile.jpg",
        "/static/images/cards/contemplative-reptile.jpg",
        "/static/images/cards/contemplative-reptile.jpg",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ];
    console.log(mediaURLs[page]);
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Online Shopping
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { window.location = '/dashboard' }}>
                        <HomeSharpIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { window.location = '/cart' }}>
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
                                src={mediaURLs[page]}
                                title='hi'
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
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                        <Container classes={{root:classes.containerRoot}} style={{display:'flex'}}>
                            <Container style={{display:'inline', paddingTop: 10}}>
                                <Typography variant="h6" color="textPrimary" className={classes.priceHeading} display="inline">
                                    Price:
                                </Typography>
                                <Typography variant="body1" color="textSecondary" className={classes.price} display="inline">
                                        2000
                                </Typography>
                            </Container>
                            <Container style={{display:'inline', textAlign: 'right'}}>
                                <CounterButtons onChange={onChange} number={counter} id={1}/>
                            </Container>
                        </Container>
                    </Grid>
                </Fade>
            </Grid>
        </div >
    );
}