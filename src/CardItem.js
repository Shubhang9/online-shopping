import { Box, Card, CardActionArea, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';
import CounterButtons from './CounterButtons';
const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 200,
        objectFit: 'contain',
    },
});

export default function CardItem(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => { window.location = '/product' }}>
                <CardMedia
                    className={classes.media}
                    image={props.imageURL}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {props.heading}
                    </Typography>
                    <Box component="div" textOverflow="ellipsis">
                        <Typography variant="body2" color="textSecondary" component="p" style={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            // whiteSpace: 'nowrap',
                            height: 100,
                            textOverflow: 'ellipsis'
                        }}>
                            {props.description}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <Container style={{ display: 'inline-flex', margin:0, padding:0 }}>
                <Container style={{ display: 'inline', paddingTop: 15, width:'fit-content' }}>
                    <Typography color="textSecondary" >{props.price}</Typography>
                </Container>
                <Container style={{ display: 'inline', textAlign: 'right' }}>
                    <CounterButtons onChange={props.onChange} number={props.number} id={props.id} price={props.price} />
                </Container>
            </Container>
        </Card>
    );
}