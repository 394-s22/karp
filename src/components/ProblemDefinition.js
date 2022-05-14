import React, {useState} from "react"
import DecisionProblem from "./DecisionProblem";
import Verifier from "./Verifier";

const ProblemDefinition = ({ fileHeader, formInput, setFormInput }) => {

    const [decisionProblem, setDecisionProblem] = useState();
    const [verifier, setVerifier] = useState();
    const problemDefinition = '(' + `${fileHeader}` + decisionProblem + verifier + ')';
    setFormInput(problemDefinition);

    return (
        <div>
            <DecisionProblem setFormInput={setDecisionProblem} />
            <Verifier setFormInput={setVerifier}/>
        </div>
    );
}

export default ProblemDefinition;