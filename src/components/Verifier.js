import React from "react";
import { TextField } from "@material-ui/core";
import "../styles/Verifier.css";
const Verifier = ({ setFormInput }) => {

    const handleInput = (evt) => {
        evt.preventDefault();

        setFormInput(evt.target.value);
    };

    return (
        <div className="Verifier">
            <TextField
                variant="outlined"
                label="Verifier"
                name="Verifier"
                multiline
                minRows={1}
                defaultValue={""}
                helperText="Problem Definition Verifier"
                onChange={handleInput}
            />
        </div>

    );
}

export default Verifier;