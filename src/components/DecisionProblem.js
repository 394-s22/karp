import React, { useEffect, useReducer, useState } from "react";
import { Button, Icon, TextField, Paper, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/DecisionProblem.css";
import Instance from "./Instance.js";


const DecisionProblem = ({ setFormInput }) => {

  // const [instanceInputs, setInstanceInputs] = useState({ 0: "" });
  const [instanceInputs, setInstanceInputs] = useState([]);

  const [decisionProblemInput, setDecisionProblemInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Name: "",
      Certificate: ""
    }
  );

  const handleInput = async (evt) => {
    evt.preventDefault();

    const name = evt.target.name;

    const newValue = await evt.target.value;
    setDecisionProblemInput({ [name]: newValue });
  };

  useEffect(() => {
    let data = { decisionProblemInput }["decisionProblemInput"];
    console.log(instanceInputs)
    let instanceString = instanceInputs.join();
    // instanceInputs.map((value) => {
    //   instanceString += value;
    //   instanceString.join(value);
    // });

    const combinedDecisionProblem =
      "(decision-problem #:name " + data["Name"]
      + " #:instance ( " + instanceString + " ) #:certificate "
      + data["Certificate"] + ")";

    setFormInput(combinedDecisionProblem);
    console.log(combinedDecisionProblem);
  }, [decisionProblemInput, instanceInputs]);

  const addInstance = (evt) => {
    evt.preventDefault();
    // instanceInputs.push({
    //   key: Object.keys(instanceInputs).length,
    //   value:  ""
    // });
    // setInstanceInputs({0:"", 1:""});

    // var curr_dict = {}
    // Object.assign(curr_dict, instanceInputs)
    // curr_dict[Object.keys(instanceInputs).length] = "";
    // setInstanceInputs(curr_dict);
    // console.log(instanceInputs)

    instanceInputs.push("");
    setInstanceInputs(instanceInputs);
    console.log(instanceInputs);

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
          //defaultValue={decisionProblemInput.name}
          onChange={handleInput}
        />
      </div>
      <div>
        {
          // instanceInputs.length === 0 ? <Instance instanceInputs={instanceInputs} setInstanceInputs={setInstanceInputs} key={0} /> :
          instanceInputs.map((elem, idx) => {
            return (<Instance instanceInputs={instanceInputs} setInstanceInputs={setInstanceInputs} key={idx} />)
          })
        }


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
          //defaultValue={decisionProblemInput.name}
          onChange={handleInput}
        />
      </div>
    </div >
  )
}

export default DecisionProblem;




