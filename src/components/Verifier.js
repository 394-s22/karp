import React from "react";
import { TextField } from "@material-ui/core";

const Verifier = ({setFormInput}) => {

    const handleInput = (evt) => {
        evt.preventDefault();


        setFormInput(evt.target.value);
    };

    return (
        <TextField
            label="verifier"
            name="verifier"
            multiline
            minRows={4}
            defaultValue={""}
            helperText="Problem Definition Verifier"
            onChange={handleInput}
        />
    );
}

export default Verifier;