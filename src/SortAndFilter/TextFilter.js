import { Grid, withStyles } from "@material-ui/core";
import { PureComponent } from "react";

const classes = theme => ({
    container: {
        textAlign: "center",
        width: "100%",
        margin: 20
    },
    icon: {
        fill: "#3f51b5",
        height: "1em",
        width: "1em"
    },
    iconContainer: {
        backgroundColor: "aqua",
        borderRadius: "100%",
        cursor: "pointer",
        display: "inline-flex",
        padding: "1ch",
        marginLeft: 5
    },
    text: {
        lineHeight: "2em"
    }
});

class TextFilter extends PureComponent {
    renderFields = () => {
        return this.props.fields.map((field, index) => this.renderField(field, index))
    }

    renderField = (field, index) => {
        const name = field.name;
        const value = this.getValue(name);
        const descr = this.getItems(field, field.type === "numberRange"?" {From: "+(value.from?value.from:'NA')+"; To:"+(value.to?value.to:'NA')+"}":value);

        return ` ${descr}`;
    }

    getValue = (name) => (this.props.data && this.props.data[name]) || 'NA'

    getItems = (field, value) => field.label + "-" + value;


    render() {
        var classes = this.props.classes;
        const fieldsText = this.renderFields();
        var sortText ;
        if(this.props.data.sort && this.props.data.sort.column && this.props.data.sort.order){
            sortText = "{Column- "+this.props.data.sort.column+"; Order- "+(this.props.data.sort.order==='asc'?"Low to High":"High to Low")+"}";
        } else {
            sortText = "NA";
        }
        const text = `Sort By: ${sortText} AND Filter By: ${fieldsText}`;

        return (
            <Grid container justify="center" style={{padding:20}}>
                    <span className={classes.text}>{text}</span>
                    <div className={classes.iconContainer} onClick={this.props.onEdit}>
                        <svg
                            className={classes.icon}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 20"
                        >
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                    </div>
            </Grid>
        );
    }
}

export default withStyles(classes)(TextFilter);