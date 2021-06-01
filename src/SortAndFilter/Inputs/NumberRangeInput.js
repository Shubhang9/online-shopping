import { FormLabel } from "@material-ui/core";
import React from "react";
import NumberInput from "./NumberInput";

const NumberRangeInput = (props) => {
    var handleFromChange = (name, value) => {
        props.onChange(props.name, {
            ...props.value,
            from: value
        });
    }

    var handleToChange = (name, value) => {
        props.onChange(props.name, {
            ...props.value,
            to: value
        });
    }

    return (
        <React.Fragment>
            <FormLabel style={{ verticalAlign: 'bottom' }}>
                Price:
            </FormLabel>
            <NumberInput
                error={props.error}
                label="From"
                name={props.name + "-from"}
                onChange={handleFromChange}
                value={props.value && props.value.from ? props.value.from : ""}
                key={props.name + "-from"}
            />
            <NumberInput
                error={props.error}
                label="To"
                name={props.name + "-to"}
                onChange={handleToChange}
                value={props.value && props.value.to ? props.value.to : ""}
                key={props.name + "-to"}
            />
        </React.Fragment>
    );
}

export default NumberRangeInput;