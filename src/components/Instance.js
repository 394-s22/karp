import React, { useReducer, useEffect, useState } from "react";
import {
  Button,
  Icon,
  TextField,
  Paper,
  Typography,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import parse from "html-react-parser";
import { EXPR_INFO } from "./EXPR_INFO.js";

const Instance = ({
  instanceInputs,
  setInstanceInputs,
  typeInputs,
  setTypeInputs,
  idx,
}) => {
  const [instanceInput, setInstanceInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Instance: "",
      Type: "",
    }
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState("");
  const open = anchorEl;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = e => {
    const selectedType = e.target.innerText;
    if (selectedType) {
      console.log(selectedType);
      setType(selectedType);

    }
    setAnchorEl(null);
  };

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
    } else {
      setInstanceInputs([
        ...instanceInputs.slice(0, idx),
        ...instanceInputs.slice(idx + 1),
      ]);
      setTypeInputs([
        ...typeInputs.slice(0, idx),
        ...typeInputs.slice(idx + 1),
      ]);
    }
  };

  useEffect(() => {
    let data = { instanceInput }["instanceInput"];

    instanceInputs[idx] = data["Instance"];
    typeInputs[idx] = data["Type"];
    setInstanceInputs([...instanceInputs]);
    setTypeInputs([...typeInputs]);

    console.log(instanceInputs);
    console.log(typeInputs);
  }, [instanceInput]);

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
      <FormControl style={{ m: 1, minWidth: 80 }} variant="outlined">
        {/* <InputLabel id="type-dropdown-label">Type</InputLabel> */}
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {type === "" ? "Type" : type}
        </Button>

        <Menu
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {EXPR_INFO.map((obj) =>
            obj.exprs.map((dropdown_type) => {
              return (
                <MenuItem value="" onClick={handleClose} >{parse(dropdown_type.display)}</MenuItem>
              );
            })
          )}
        </Menu>
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
