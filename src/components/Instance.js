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

const Instance = ({ instanceInputs, setInstanceInputs, idx }) => {
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

  useEffect(() => {
    let data = { instanceInput }["instanceInput"];
    const combinedInstance =
      "[" + data["Instance"] + " is-a " + data["Type"] + "]";

    instanceInputs[idx] = combinedInstance;
    setInstanceInputs([...instanceInputs]);
    console.log(instanceInputs);
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
        //defaultValue={instanceInput.name}
        onChange={handleInstanceInput}
      />
      <p id="is-a"> is-a </p>

      <TextField
        variant="outlined"
        label="Type"
        name="Type"
        multiline
        minRows={1}
        //defaultValue={instanceInput.name}
        onChange={handleInstanceInput}
      />

      <Button
        id="remove"
        type="remove"
        variant="contained"
        color="primary"
        // onChange={}
      >
        Remove
      </Button>
    </div>
  );
};

export default Instance;
