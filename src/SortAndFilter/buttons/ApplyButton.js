import { Button } from "@material-ui/core";

const ApplyButton = (props) => (
    <Button
        color="primary"
        onClick={props.onApply}
        style={props.style}
        variant="outlined"
        className={props.className}
    >
        Apply
    </Button>
);

export default ApplyButton;