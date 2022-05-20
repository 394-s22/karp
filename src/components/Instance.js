import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const Instance = (setFormInput) => {

    const [instanceInput, setInstanceInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
          Instance: "",
          Type: ""
        }
    );
    

      const handleInstanceInput = (evt) => {
        evt.preventDefault();
    
        const name = evt.target.name;
        const newValue = evt.target.value;
        setInstanceInput({ [name]: newValue });
        let data = { instanceInput }["instanceInput"];
        const combinedInstance =  " #:instance ([" + data["Instance"]
              + " is-a (" + data["Type"];
        setFormInput(combinedInstance);
    }

    return (
        <div className="input-instance-type decision-problem-input">
        <TextField
        variant="outlined"
        label="Instance"
        name="Instance"
        multiline
        minRows={1}
        defaultValue={instanceInput.name}
        onChange={handleInstanceInput}
        />
        <p id="is-a"> is-a </p>

        <TextField
        variant="outlined"
        label="Type"
        name="Type"
        multiline
        minRows={1}
        defaultValue={instanceInput.name}
        onChange={handleInstanceInput}
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
         )
}

export default Instance;