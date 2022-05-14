import React, { useReducer } from "react";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Icon, TextField, Paper, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/DecisionProblem.css";


const DecisionProblem = ({ setFormInput }) => {

  const [decisionProblemInput, setDecisionProblemInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Name: "",
      Instance: "",
      Type: "",
      Certificate: "",
    }
  );

  const handleInput = (evt) => {
    evt.preventDefault();

    const name = evt.target.name;
    const newValue = evt.target.value;
    setDecisionProblemInput({ [name]: newValue });

    let data = { decisionProblemInput }["decisionProblemInput"];
    const combinedDecisionProblem = "(decision-problem #:name " + data["Name"]
      + " #:instance ([" + data["Instance"]
      + " is-a (" + data["Type"]
      + ")]) #:certificate " + data["Certificate"] + ")";
    console.log(combinedDecisionProblem);
    setFormInput(combinedDecisionProblem);
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
      <div className="input-instance-type decision-problem-input">
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
        <p id="is-a"> is-a </p>

        <TextField
          variant="outlined"
          label="Type"
          name="Type"
          multiline
          minRows={1}
          defaultValue={decisionProblemInput.name}
          //className={classes.textField}
          onChange={handleInput}
        />

        {/* <svg data-testid="RemoveIcon"></svg> */}
        <Button
          id="remove"
          type="remove"
          variant="contained"
          color="primary"
        // onClick={}
        >
          Remove
        </Button>

      </div>
      <div>
        {/* <svg data-testid="AddIcon"></svg> */}
        <Button
          id="add"
          type="add"
          variant="contained"
          color="primary"
        // onClick={}
        >
          Add
        </Button>

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
    </div >
  )
}

export default DecisionProblem;




