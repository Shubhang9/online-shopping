import { Card, CardActions, CardContent, IconButton, makeStyles, Typography } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
        display: 'inline-flex'
    },
    media: {
        height: 200,
    },
});

export default function CartItem(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                    {props.heading}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton edge="start" className={classes.cancelItemButton} color="inherit" aria-label="menu">
                    <CancelOutlinedIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}