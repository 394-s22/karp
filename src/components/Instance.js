import React, { useReducer, useEffect } from "react";
import {
  Button,
  Icon,
  TextField,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Instance = ({ instanceInputs, setInstanceInputs, 
                    typeInputs, setTypeInputs, idx}) => {

  const [instanceInput, setInstanceInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Instance: "",
      Type: "",
    }
  );

  const handleInstanceInput = (evt) => {
    evt.preventDefault();

    const name = evt.target.name;
    const newValue = evt.target.value;
    setInstanceInput({ [name]: newValue });
  };

  const removeInstance = (evt) => {
    evt.preventDefault();

    if (!idx) {
      setInstanceInputs([...instanceInputs.slice(1)]);
      setTypeInputs([...typeInputs.slice(1)]);
    }
    else {
      setInstanceInputs([...instanceInputs.slice(0, idx), ...instanceInputs.slice(idx + 1)]);
      setTypeInputs([...typeInputs.slice(0, idx), ...typeInputs.slice(idx + 1)]);
    }
    
  }



  useEffect(() => {
    let data = { instanceInput }["instanceInput"];

    instanceInputs[idx] = data["Instance"];
    typeInputs[idx] = data["Type"];
    setInstanceInputs([...instanceInputs]);
    setTypeInputs([...typeInputs]);
  

    console.log(instanceInputs);
    console.log(typeInputs);

  }, [instanceInput]);

  // const removeInstance = (evt) => {
  //   const key = evt.target.key
  // }

  return (
    <div className="input-instance-type decision-problem-input">
      <TextField
        variant="outlined"
        label="Instance"
        name="Instance"
        multiline
        minRows={1}
        value={instanceInputs[idx]}
        onChange={handleInstanceInput}
      />
      <p id="is-a"> is-a </p>

      <TextField
        variant="outlined"
        label="Type"
        name="Type"
        multiline
        minRows={1}
        value={typeInputs[idx]}
        onChange={handleInstanceInput}
      />

      <Button
        id="remove"
        type="remove"
        variant="contained"
        color="primary"
        onClick={removeInstance}
      >
        Remove
      </Button>
    </div>
  );
};

export default Instance;
