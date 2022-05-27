import React, { useReducer, useEffect } from "react";
import {
  Button,
  Icon,
  TextField,
  Paper,
  Typography,
  IconButton,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { EXPR_INFO } from "./EXPR_INFO.js";

const Instance = ({ instanceInputs, setInstanceInputs,
  typeInputs, setTypeInputs, idx }) => {

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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="type-dropdown-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={age}
          label="Age"
        // onChange={handleChange}
        >
          {
            EXPR_INFO.map((obj) => (
              obj.exprs.map((dropdown_type) => {
                const display_regex = new RegExp(dropdown_type.display);
                //const display_string = display_regex.exec(text)
                // return (<MenuItem value=""><div dangerouslySetInnerHTML={{ __html: dropdown_type.display }}></div></MenuItem>)
                return (<MenuItem value=""><pre>{dropdown_type.display}</pre></MenuItem>)
              })
            ))
          }
          {/* {
            EXPR_INFO.map((i) => (
              <MenuItem>{i.name}</MenuItem>
            ))
          } */}
          {/* <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>

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
