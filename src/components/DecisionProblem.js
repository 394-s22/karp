import React, { useEffect, useReducer, useState } from "react";
import {
  Button,
  Icon,
  TextField,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/DecisionProblem.css";
import Instance from "./Instance.js";

const DecisionProblem = ({ setFormInput }) => {
  const [instanceInputs, setInstanceInputs] = useState([]);
  const [typeInputs, setTypeInputs] = useState([]);

  const [decisionProblemInput, setDecisionProblemInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Name: "",
      Certificate: "",
    }
  );

  const handleInput = async (evt) => {
    evt.preventDefault();

    const name = evt.target.name;

    const newValue = await evt.target.value;
    setDecisionProblemInput({ [name]: newValue });
  };

  
  const combinedInstance = () => {
    let instanceString = "";
    for (var i = 0; i < instanceInputs.length; i++) {
      instanceString += "[" + instanceInputs[i] +  " is-a " + typeInputs[i] + "] ";
     
    }
    return instanceString;
  }

  useEffect(() => {
    let data = { decisionProblemInput }["decisionProblemInput"];
    console.log(instanceInputs);

    const combinedDecisionProblem =
      "(decision-problem #:name " +
      data["Name"] +
      " #:instance ( " +
      combinedInstance() +
      " ) #:certificate " +
      data["Certificate"] +
      ")";

    setFormInput(combinedDecisionProblem);
    console.log(combinedDecisionProblem);
  }, [decisionProblemInput, instanceInputs]);

  const addInstance = (evt) => {
    evt.preventDefault();

    setInstanceInputs([...instanceInputs, ""]);
    setTypeInputs([...typeInputs, ""]);
    console.log(instanceInputs);
    console.log(typeInputs);
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
          onChange={handleInput}
        />
      </div>
      <div>
        {instanceInputs.length === 0 ? (
          <Instance
            instanceInputs={instanceInputs}
            setInstanceInputs={setInstanceInputs}
            typeInputs={typeInputs}
            setTypeInputs={setTypeInputs}
            idx={0}
            key={0}
          />
        ) : (
          instanceInputs.map((elem, idx) => (
            <Instance
              instanceInputs={instanceInputs}
              setInstanceInputs={setInstanceInputs}
              typeInputs={typeInputs}
              setTypeInputs={setTypeInputs}
              idx={idx}
              key={idx}
            />
          ))
        )}
      </div>

      <div>
        <Button
          id="add"
          type="add"
          variant="contained"
          color="primary"
          onClick={addInstance}
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
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default DecisionProblem;
