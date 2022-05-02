import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import '../styles/Form.css'

const TextBox = ({ setOutput }) => {
  // const useStyles = makeStyles((theme) => ({
  //   button: {
  //     margin: theme.spacing(1),
  //   },
  //   leftIcon: {
  //     marginRight: theme.spacing(1),
  //   },
  //   rightIcon: {
  //     marginLeft: theme.spacing(1),
  //   },
  //   iconSmall: {
  //     fontSize: 20,
  //   },
  //   root: {
  //     padding: theme.spacing(3, 2),
  //   },
  //   container: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     width: 400,
  //   },
  // }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      iset: "",
      "3sat": "",
      "Foward": "",
      "Backward": "",
      "Instance": "",
    }
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let data = { formInput }["formInput"];
    setOutput(data["iset"] + data["3sat"] + data["Forward"] + data["Backward"] + data["Instance"]);
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  //const classes = useStyles();

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <TextField  
          label="iset"
          name="iset"
          multiline
          minRows={4}
          defaultValue={formInput.name}
          //className={classes.textField}
          helperText="Enter iset"
          onChange={handleInput}
        />
        <TextField  
          label="3sat"
          name="3sat"
          multiline
          minRows={4}
          defaultValue={formInput.name}
          //className={classes.textField}
          helperText="Enter 3sat"
          onChange={handleInput}
        />
        <TextField  
          label="Forward"
          name="Forward"
          multiline
          minRows={4}
          defaultValue={formInput.name}
          //className={classes.textField}
          helperText="Enter Forward"
          onChange={handleInput}
        />
        <TextField  
          label="Backward"
          name="Backward"
          multiline
          minRows={4}
          defaultValue={formInput.name}
          //className={classes.textField}
          helperText="Enter Backward"
          onChange={handleInput}
        />
        <TextField  
          label="Instance"
          name="Instance"
          multiline
          minRows={4}
          defaultValue={formInput.name}
          //className={classes.textField}
          helperText="Enter Intance"
          onChange={handleInput}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          //className={classes.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TextBox;
