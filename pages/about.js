import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
  },
});

export default () => {
    return (
      <div>
        <h1>About Us</h1>
        <Button variant="secondary">
          Secondary
        </Button>
      </div>
    );
}
