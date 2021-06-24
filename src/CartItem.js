import { Card, CardActions, CardContent, Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CounterButtons from './CounterButtons';

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
        display: 'inline-flex'
    },
    media: {
        height: 200,
    },
    containerRoot: {
        margin: 0,
        padding: 0
    }
});

export default function CartItem(props) {
    const classes = useStyles();
    console.log("cartitem " + props.id);
    return (
        <Card >
            <div className={classes.root}>
                <CardContent>
                    <div style={{ display: "inline-flex", justifyContent: 'space-between', width:'100%' }}>
                        <Typography gutterBottom variant="h6" component="h6">
                            {props.heading}
                        </Typography>
                        <CardActions>
                            <IconButton edge="start" size="small" className={classes.cancelItemButton} color="inherit" aria-label="menu">
                                <CancelOutlinedIcon />
                            </IconButton>
                        </CardActions>
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>

                </CardContent>

            </div>
            <Container classes={{ root: classes.containerRoot }} style={{ display: 'flex' }}>
                <Container style={{ display: 'inline', paddingTop: 10 }}>
                    <Typography variant="h6" color="textPrimary" className={classes.priceHeading} display="inline">
                        Amount:
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className={classes.price} display="inline">
                        {props.price*props.number}
                    </Typography>
                </Container>
                <Container style={{ display: 'inline', textAlign: 'right' }}>
                    <CounterButtons
                        onChange={(id, value) => { props.addToCart(id, value); }}
                        number={props.number}
                        id={props.id} />
                </Container>
            </Container>
        </Card >
    );
}