import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/DecisionProblem.css";


const DecisionProblem = ({ output, setOutput }) => {

  const [decisionProblemInput, setDecisionProblemInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Name: "",
      Instance: "",
      Arity: "",
      Certificate: "",
    }
  );

  const handleGenerate = (evt) => {
    evt.preventDefault();
    let data = { decisionProblemInput }["decisionProblemInput"];
    const combinedDecisionProblem = "(decision-problem " + data["Name"]
      + "([" + data["Instance"]
      + "is-a (" + data["Arity"]
      + ")])" + data["Certificate"];
    console.log(combinedDecisionProblem);
    return combinedDecisionProblem;
  }

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setDecisionProblemInput({ [name]: newValue });
  };

  return (
    <div className="decision-problem">
      <h1>Decision Problem</h1>
      <div className="input-name decision-problem-input">
        <TextField
          variant="outlined"
          label="Name"
          name="Name"
          multiline
          minRows={1}
          defaultValue={decisionProblemInput.name}
          //className={classes.textField}
          onChange={handleInput}
        />
      </div>
      <div className="input-instance-arity decision-problem-input">
        <TextField
          variant="outlined"
          label="Instance"
          name="Instance"
          multiline
          minRows={1}
          defaultValue={decisionProblemInput.name}
          //className={classes.textField}s
          onChange={handleInput}
        />
        <h3> is - a </h3>
        <TextField
          variant="outlined"
          label="Arity"
          name="Arity"
          multiline
          minRows={1}
          defaultValue={decisionProblemInput.name}
          //className={classes.textField}
          onChange={handleInput}
        />

      </div>
      <div className="input-certificate decision-problem-input">
        <TextField
          variant="outlined"
          label="Certificate"
          name="Certificate"
          multiline
          minRows={1}
          defaultValue={decisionProblemInput.name}
          //className={classes.textField}
          onChange={handleInput}
        />
      </div>
      <Button
        type="generate"
        variant="contained"
        color="primary"
        onClick={handleGenerate}
      >
        Generate
      </Button>
    </div>





  )


}

export default DecisionProblem;




