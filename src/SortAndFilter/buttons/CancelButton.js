import { Button } from "@material-ui/core";

const CancelButton = (props) => (
    <Button
      color="secondary"
      onClick={props.onCancel}
      style={props.style}
      variant="outlined"
      className={props.className}
    >
      Cancel
    </Button>
  );

  export default CancelButton;