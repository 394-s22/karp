import React from "react"
import DecisionProblem from "./DecisionProblem";
import Verifier from "./Verifier";

const ProblemDefinition = ({ fileHeader, output, setOutput, setFormInput }) => {
    return (
        <div>
            <DecisionProblem
                output={output}
                setOutput={setOutput}
                setFormInput={setFormInput}
            />
            <Verifier />
        </div>
    );
}

export default ProblemDefinition;