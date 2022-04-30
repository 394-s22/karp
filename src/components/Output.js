import React from "react";
import { Typography } from "@material-ui/core";

const Output = (output) => {
  return (
    <div>
      <Typography>{output["output"]}</Typography>
    </div>
  );
};

export default Output;
