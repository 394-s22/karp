import React from "react";
import { Typography } from "@material-ui/core";
import '../styles/Output.css'
import '../App.css'

const Output = (output) => {
  return (
    <div className="output">
      <Typography>{output["output"]}</Typography>
    </div>
  );
};

export default Output;
