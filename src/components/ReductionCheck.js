import React, { useReducer, useState } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/ReductionCheck.css";
import ProblemDefinition from "./ProblemDefinition";

const ReductionCheck = ({ output, setOutput }) => {

  const [reducedFrom, setReducedFrom] = useState([]);
  const [reducedTo, setReducedTo] = useState([]);
  const [forward, setForward] = useState([]);
  const [backward, setBackward] = useState([]);
  const [instance, setInstance] = useState([]);

  const lang = '#lang racket ';
  const reducedFromHeader = 'module 3sat karp/problem-definition (require karp/lib/cnf karp/lib/mapping) ';
  const reducedToHeader = 'module iset karp/problem-definition (require karp/lib/graph) ';


  const handleSubmit = (evt) => {
    evt.preventDefault();
    let combinedData = lang
      + reducedFrom
      + reducedTo
      + backward
      + forward
      + instance;

    console.log(combinedData);

    // add "await" and deal with async code!
    fetch("http://localhost:3001/", {
      method: "POST",
      body: combinedData,
    })
      .then((response) => response.text())
      .then((result) => {
        setOutput(result);
        console.log("Success:", combinedData);
      });
  };

  const handleInput = (evt) => {
    switch (evt.target.name) {
      case "reduced-from":
        setReducedFrom(evt.target.value);
        break;
      case "reduced-to":
        setReducedTo(evt.target.value);
        break;
      case "backward":
        setBackward(evt.target.value);
        break;
      case "forward":
        setForward(evt.target.value);
        break;
      case "instance":
        setInstance(evt.target.value);
        break;
    }
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <div className="reduced-from">
          <ProblemDefinition
            fileHeader={reducedFromHeader}
            formInput={reducedFrom}
            setFormInput={setReducedFrom}
          />
        </div>
        <div className="reduced-to">
          <ProblemDefinition
            fileHeader={reducedToHeader}
            formInput={reducedTo}
            setFormInput={setReducedTo}
          />
        </div>
        <div className="submission">
          <TextField
            variant="outlined"
            label="backward"
            name="backward"
            multiline
            minRows={1}
            defaultValue={""}
            helperText="Enter Backward"
            onChange={handleInput}
          />
          <TextField
            variant="outlined"
            label="forward"
            name="forward"
            multiline
            minRows={1}
            defaultValue={""}
            helperText="Enter Forward"
            onChange={handleInput}
          />
          <TextField
            variant="outlined"
            label="instance"
            name="instance"
            multiline
            minRows={1}
            defaultValue={""}
            helperText="Enter Instance"
            onChange={handleInput}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReductionCheck;
