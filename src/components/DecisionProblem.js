import React, { useReducer, useState } from "react";
import { Button, Icon, TextField, Paper, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/DecisionProblem.css";
import Instance from "./Instance.js";


const DecisionProblem = ({ setFormInput }) => {

  const [instanceInputs, setInstanceInputs] = useState({0:""});

  const [decisionProblemInput, setDecisionProblemInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Name: "",
      Instance: "",
      Certificate: ""
    }
  );



  const handleInput = (evt) => {
    evt.preventDefault();

    const name = evt.target.name;
    const newValue = evt.target.value;
    setDecisionProblemInput({ [name]: newValue });

    let data = { decisionProblemInput }["decisionProblemInput"];
    //for every input, 
    //output = output + input 
    let instanceString = "";
    Object.entries(instanceInputs).map(([key, value]) => {
      instanceString += value;
    })
    
    
    
    const combinedDecisionProblem = 
      "(decision-problem #:name " + data["Name"]
      + " #:instance ( " + instanceString + " ) #:certificate "
      + data["Certificate"] + ")";

    setFormInput(combinedDecisionProblem);
    console.log(combinedDecisionProblem);
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
          onChange={handleInput}
        />
      </div>
      <div>
        
        {
          Object.entries(instanceInputs).map(([key, value]) => {
            return (
            <Instance instanceInputs = {instanceInputs} setInstanceInputs={setInstanceInputs} id={key}/>
          )})
        } 

        
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
          onChange={handleInput}
        />
      </div>
    </div >
  )
}

export default DecisionProblem;




