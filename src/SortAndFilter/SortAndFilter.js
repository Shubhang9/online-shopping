import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, withStyles } from "@material-ui/core";
import { Component } from "react";
import ApplyButton from "./buttons/ApplyButton";
import CancelButton from "./buttons/CancelButton";
import NumberInput from "./Inputs/NumberInput";
import NumberRangeInput from "./Inputs/NumberRangeInput";

const classes = theme => ({
    button: {
        margin: 10
    },
    buttons: {
        textAlign: 'center',
        width: `98%`
    },
    container: {
        padding: 20,
    },
    grid: {
        alignItems: 'flex-end'
    },
    item: {
        padding: 10
    }
});

class SortAndFilter extends Component {
    constructor(props){
        super(props);
        var data = {...this.props.data};
        this.state = {
            data: Object.assign({ sort: {column:"", order:""} }, data)
        }
    }
    

    renderFields = () => {
        return this.props.fields.map(field => this.getElement(field));
    }

    getElement = (field) => {
        if (field.type === 'number') {
            return <NumberInput
                label={field.label}
                name={field.name}
                value={this.state.data[field.name]}
                onChange={this.handleChange}
                key={field.label}
            />;
        } else if (field.type === 'numberRange') {
            return <NumberRangeInput
                label={field.label}
                name={field.name}
                error={this.state.data[field.name] && !this.state.data[field.name].to ^ !this.state.data[field.name].from}
                value={this.state.data[field.name]}
                onChange={this.handleChange}
                key={field.label}
            />;
        }
    }

    handleChange = (field, value) => {
        this.setState({
            data: {
                ...this.state.data,
                [field]: value
            }
        });
    }
    handleSortColumnChange = (event) => {
        var sort = {...this.state.data.sort}; 
        sort['column']=event.target.value;
        this.setState({
            data: {
                ...this.state.data,
                'sort': sort
            }
        });
    }

    handleSortOrderChange = (event) => {
        var sort = {...this.state.data.sort}; 
        sort['order']=event.target.value;
        this.setState({
            data: {
                ...this.state.data,
                'sort': sort
            }
        });
    }

    handleApply = () => this.props.onChange(this.state.data);

    handleCancel = () => {
        var data = {...this.props.data};
        console.log(Object.assign({ sort: {column:"", order:""} }, data));
        this.setState({
            data: Object.assign({ sort: {column:"", order:""} }, data)
        });
        this.props.onCancel();
    }

    render() {
        var classes = this.props.classes;
        console.log(this.props.data.sort);
        return (
            <div className={classes.container} key="main-dev">
                <Grid container justify="space-between" >
                    <Grid item style={{ marginLeft: 20 }}>
                        <FormControl style={{ minWidth: 120 }}>
                            <InputLabel id="sort-by-label">Column</InputLabel>
                            <Select
                                labelId="sort-by-label"
                                id="sort-by"
                                value={this.state.data.sort.column}
                                onChange={this.handleSortColumnChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'name'}>Name</MenuItem>
                                <MenuItem value={'price'}>Price</MenuItem>
                            </Select>
                            <FormHelperText>Sort By</FormHelperText>
                        </FormControl>
                        <FormControl error={this.state.data.sort && this.state.data.sort.column && !this.state.data.sort.order} style={{ marginLeft:15, minWidth: 120 }}>
                            <InputLabel id="sort-order-label">Order</InputLabel>
                            <Select
                                labelId="sort-order-label"
                                id="sort-order"
                                value={this.state.data.sort.order}
                                onChange={this.handleSortOrderChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'asc'}>Low to High</MenuItem>
                                <MenuItem value={'desc'}>High to Low</MenuItem>
                            </Select>
                            <FormHelperText>Sort Order</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item style={{ marginRight: 20 }}>
                        {this.renderFields()}
                    </Grid>
                </Grid>
                <div className={classes.buttons} key="button-div">
                    <CancelButton onCancel={this.handleCancel} className={classes.button} />
                    <ApplyButton onApply={this.handleApply} className={classes.button} />
                </div>
            </div>
        );
    }
}

export default withStyles(classes)(SortAndFilter);