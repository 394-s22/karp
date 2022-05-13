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

    const handleSubmit = (evt) => {
      evt.preventDefault();
      let data = { decisionProblemInput }["decisionProblemInput"];
      let combinedData = "(decision-problem " + data["Name"]
        + "([" + data["Instance"] + "is-a (" 
        + data["Arity"] + ")])" + data["Certificate"];
      console.log()
      return combinedData;
    }

    const handleInput = (evt) => {
      const name = evt.target.name;
      const newValue = evt.target.value;
      setDecisionProblemInput({ [name]: newValue });
    };
    
    return (
      <div className="decision-problem">
        <div className="input-name">
          <TextField
            label="Name"
            name="Name"
            multiline
            minRows={4}
            defaultValue={decisionProblemInput.name}
            //className={classes.textField}
            helperText="Enter Name"
            onChange={handleInput}
          />
        </div>
        <div className="input-instance">
          <TextField
            label="Instance"
            name="Instance"
            multiline
            minRows={4}
            defaultValue={decisionProblemInput.name}
            //className={classes.textField}
            helperText="Enter Instance"
            onChange={handleInput}
          />
        </div>
        <div className="input-arity">
          <TextField
            label="Arity"
            name="Arity"
            multiline
            minRows={4}
            defaultValue={decisionProblemInput.name}
            //className={classes.textField}
            helperText="Enter Arity"
            onChange={handleInput}
          />
        </div>
        <div className="input-certificate">
          <TextField
            label="Certificate"
            name="Certificate"
            multiline
            minRows={4}
            defaultValue={decisionProblemInput.name}
            //className={classes.textField}
            helperText="Enter Certificate"
            onChange={handleInput}
          />
        </div>
      </div>
        
      
      


    )


}
        
   


