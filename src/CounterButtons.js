import React from "react";
import Button from "@material-ui/core/Button";
import { CardActions, IconButton } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

class CounterButtons extends React.Component {

  handleIncrement = () => {
    this.props.onChange(this.props.id, this.props.number + 1);
  };

  handleDecrement = () => {
    this.props.onChange(this.props.id, this.props.number - 1);
  };
  render() {
    console.log(this.props.number);
    const displayCounter = this.props.number > 0;
    return (
      <CardActions style={{ justifyContent: 'space-between', placeContent: 'flex-end' }}>
        <div>
          {displayCounter && <IconButton size="small" edge="start" onClick={this.handleDecrement} color="inherit" aria-label="menu">
            <RemoveIcon />
          </IconButton>}
          {displayCounter && <Button size="small" disabled>{this.props.number}</Button>}
          <IconButton size="small" edge="start" onClick={this.handleIncrement} color="inherit" aria-label="menu">
            <AddIcon />
          </IconButton>
        </div>
      </CardActions>
    );
  }
}

export default CounterButtons;