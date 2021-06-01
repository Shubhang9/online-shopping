import { TextField } from "@material-ui/core";

const NumberInput= (props)=> {
    var handleChange=(event)=>{
        props.onChange(props.name, event.target.value);
    }
    return (
        <TextField
        error={props.error}
        type="number" 
        label={props.label} 
        onChange={handleChange} 
        value={props.value?props.value:""} 
        style={{marginLeft:15, maxWidth:100}}
        />
    );
}

export default NumberInput;