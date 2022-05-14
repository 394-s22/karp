import React from "react";
import { Typography } from "@material-ui/core";
import '../styles/Output.css'
import '../App.css'

const Output = (output) => {
  return (
    <div className="output">
      <Typography className="output-text" component={'span'} variant={'body2'}>
        <pre>{output.output}</pre>
      </Typography>
    </div>
  );
};

export default Output;
