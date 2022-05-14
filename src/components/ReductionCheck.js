import React, { useReducer, useState } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/ReductionCheck.css";
import DecisionProblem from "./DecisionProblem.js";

const ReductionCheck = ({ output, setOutput }) => {
  // const useStyles = makeStyles((theme) => ({
  //   button: {
  //     margin: theme.spacing(1),
  //   },
  //   leftIcon: {
  //     marginRight: theme.spacing(1),
  //   },
  //   rightIcon: {
  //     marginLeft: theme.spacing(1),
  //   },
  //   iconSmall: {
  //     fontSize: 20,
  //   },
  //   root: {
  //     padding: theme.spacing(3, 2),
  //   },
  //   container: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     width: 400,
  //   },
  // }));

  const [reducedFrom, setReducedFrom] = useState([]);
  const [reducedTo, setReducedTo] = useState([]);
  const [forward, setForward] = useState([]);
  const [backward, setBackward] = useState([]);
  const [instance, setInstance] = useState([]);

  // const [formInput, setFormInput] = useReducer(
  //   (state, newState) => ({ ...state, ...newState }),
  //   {
  //     "3sat": "",
  //     iset: "",
  //     Forward: "",
  //     Backward: "",
  //     Instance: "",
  //   }
  // );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //let data = { formInput }["formInput"];
    let combinedData = reducedFrom + reducedTo + backward + forward + instance;

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
    // const name = evt.target.name;
    // const newValue = evt.target.value;
    // setFormInput({ [name]: newValue });
  };

  //const classes = useStyles();

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <DecisionProblem
          output={output}
          setOutput={setOutput}
          setFormInput={setReducedFrom}
        />
        <TextField
          label="reduced-to"
          name="reduced-to"
          multiline
          minRows={4}
          defaultValue={"reduced-to"}
          //className={classes.textField}
          helperText="Problem Reducing To"
          onChange={handleInput}
        />
        <TextField
          label="backward"
          name="backward"
          multiline
          minRows={4}
          defaultValue={"backward"}
          //className={classes.textField}
          helperText="Enter Backward"
          onChange={handleInput}
        />
        <TextField
          label="forward"
          name="forward"
          multiline
          minRows={4}
          defaultValue={"forward"}
          //className={classes.textField}
          helperText="Enter Forward"
          onChange={handleInput}
        />
        <TextField
          label="instance"
          name="instance"
          multiline
          minRows={4}
          defaultValue={"instance"}
          //className={classes.textField}
          helperText="Enter Instance"
          onChange={handleInput}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          //className={classes.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReductionCheck;
