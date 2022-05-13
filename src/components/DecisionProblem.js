import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import "../styles/Form.css";


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

    const handleInput = (evt) => {
      const name = evt.target.name;
      const newValue = evt.target.value;
      setFormInput({ [name]: newValue });
    };
    
    return (
      <div>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        
   


