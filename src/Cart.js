import { AppBar, Button, Fade, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import CartItem from './CartItem';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

export default function Cart() {
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
        heading:{
            margin: 20
        },
        SortAndFilter:{
            margin: 10
        }
    });
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Online Shopping
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { window.location = '/dashboard' }}>
                        <HomeSharpIcon/>
                    </IconButton>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Typography variant="h4" color="textPrimary" className={classes.heading}>
                Your Cart
            </Typography>
            <Grid container direction="row" spacing={3} justify="center" >
                <Fade in timeout={500}>
                    <Grid item >
                        <CartItem
                            imageURL="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            heading="Lizard"
                            description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica"
                        />
                    </Grid>
                </Fade>
            </Grid>
        </div>
    );
}